const projects = Array.isArray(window.portfolioProjects)
  ? window.portfolioProjects
  : [];

const statusLabels = {
  completed: 'Shipped',
  building: 'In progress',
  planned: 'Roadmap',
};

const projectsGrid = document.getElementById('projectsGrid');
const projectEmpty = document.getElementById('projectEmpty');
const projectResult = document.getElementById('projectResult');
const filterButtons = [...document.querySelectorAll('[data-filter]')];
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
const prefersReducedMotion = motionPreference.matches;

let revealObserver;
let revealSystemReady = false;
let revealStartTimer;
let revealFallbackFrame;
let navigationScrollFrame;
let navigationPreviousScrollBehavior;

function element(tagName, className, text) {
  const node = document.createElement(tagName);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function getAnchorDestination(hash) {
  if (!hash || hash === '#') return null;

  try {
    return document.getElementById(decodeURIComponent(hash.slice(1)));
  } catch {
    return null;
  }
}

function getAnchorScrollTop(destination) {
  if (destination === document.body || destination.id === 'top') return 0;

  const currentTop = window.scrollY || window.pageYOffset || 0;
  const headerHeight =
    document.querySelector('.site-header')?.getBoundingClientRect().height || 0;
  const requestedTop =
    destination.getBoundingClientRect().top + currentTop - headerHeight - 24;
  const maximumTop = Math.max(
    0,
    document.documentElement.scrollHeight - window.innerHeight,
  );

  return Math.min(maximumTop, Math.max(0, Math.round(requestedTop)));
}

function cancelNavigationScroll() {
  if (navigationScrollFrame) {
    window.cancelAnimationFrame(navigationScrollFrame);
    navigationScrollFrame = undefined;
  }

  const root = document.documentElement;
  if (navigationPreviousScrollBehavior !== undefined) {
    root.style.scrollBehavior = navigationPreviousScrollBehavior;
    navigationPreviousScrollBehavior = undefined;
  }
  root.classList.remove('is-scroll-animating');
}

function focusAnchorDestination(destination) {
  if (destination === document.body || destination.id === 'top') return;

  const focusTarget = destination.querySelector('h1, h2') || destination;
  focusTarget.setAttribute('tabindex', '-1');

  try {
    focusTarget.focus({ preventScroll: true });
  } catch {
    focusTarget.focus();
  }
}

function scrollToAnchor(destination, { animate = true, focus = false } = {}) {
  cancelNavigationScroll();

  const root = document.documentElement;
  const startTop = window.scrollY || window.pageYOffset || 0;
  const destinationTop = getAnchorScrollTop(destination);
  const distance = destinationTop - startTop;
  const shouldAnimate =
    animate && !motionPreference.matches && Math.abs(distance) > 2;

  root.classList.add('is-scroll-animating');

  if (!shouldAnimate) {
    navigationPreviousScrollBehavior = root.style.scrollBehavior;
    root.style.scrollBehavior = 'auto';
    window.scrollTo(0, destinationTop);
    navigationScrollFrame = window.requestAnimationFrame(() => {
      navigationScrollFrame = undefined;
      root.style.scrollBehavior = navigationPreviousScrollBehavior;
      navigationPreviousScrollBehavior = undefined;
      root.classList.remove('is-scroll-animating');
      if (focus) focusAnchorDestination(destination);
    });
    return;
  }

  const duration = Math.min(900, Math.max(520, Math.abs(distance) * 0.32));
  let startTime;

  function animateScroll(currentTime) {
    if (startTime === undefined) startTime = currentTime;

    const progress = Math.min(1, (currentTime - startTime) / duration);
    const easedProgress =
      progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

    window.scrollTo(0, startTop + distance * easedProgress);

    if (progress < 1) {
      navigationScrollFrame = window.requestAnimationFrame(animateScroll);
      return;
    }

    navigationScrollFrame = undefined;
    root.classList.remove('is-scroll-animating');
    if (focus) focusAnchorDestination(destination);
  }

  navigationScrollFrame = window.requestAnimationFrame(animateScroll);
}

function updateAnchorHistory(hash) {
  if (!window.history?.pushState) return;

  if (window.location.hash === hash) {
    window.history.replaceState(null, '', hash);
  } else {
    window.history.pushState(null, '', hash);
  }
}

function initialiseAnchorNavigation() {
  document.addEventListener('click', (event) => {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    const eventTarget = event.target;
    if (!(eventTarget instanceof Element)) return;

    const link = eventTarget.closest('a[href^="#"]');
    if (!link || link.classList.contains('skip-link')) return;

    const hash = link.getAttribute('href');
    const destination = getAnchorDestination(hash);
    if (!destination) return;

    event.preventDefault();
    cancelNavigationScroll();
    updateAnchorHistory(hash);

    // Let Mobile Safari remove the menu's scroll lock before scrolling.
    navigationScrollFrame = window.requestAnimationFrame(() => {
      navigationScrollFrame = undefined;
      scrollToAnchor(destination, { focus: true });
    });
  });

  window.addEventListener('touchstart', cancelNavigationScroll, {
    passive: true,
  });
  window.addEventListener('wheel', cancelNavigationScroll, { passive: true });
}

function createProjectCard(project, projectIndex) {
  const status = statusLabels[project.status] ? project.status : 'planned';
  const card = element('article', 'project-card');

  card.dataset.status = status;
  card.dataset.reveal = '';
  card.style.setProperty('--card-accent', project.accent || '#72c7ff');

  const header = element('header', 'project-card__header');
  header.append(element('span', 'project-index', `P.${String(projectIndex + 1).padStart(2, '0')}`));

  const statusBadge = element(
    'span',
    `status-badge status-badge--${status}`,
  );
  statusBadge.append(element('i'));
  statusBadge.append(document.createTextNode(statusLabels[status]));
  header.append(statusBadge);

  const signal = element('div', 'project-card__signal');
  signal.setAttribute('aria-hidden', 'true');
  for (let index = 0; index < 8; index += 1) {
    signal.append(element('span'));
  }

  const body = element('div', 'project-card__body');
  body.append(element('h3', '', project.title));
  body.append(element('p', 'project-card__description', project.description));

  const tagList = element('ul', 'project-tags');
  tagList.setAttribute('aria-label', `Technologies used for ${project.title}`);
  const tags = Array.isArray(project.tags) ? project.tags : [];

  tags.forEach((tag) => {
    tagList.append(element('li', '', tag));
  });

  body.append(tagList);

  const footer = element('footer', 'project-card__footer');
  footer.append(element('span', 'project-kind', project.kind || 'Backend system'));

  if (project.url) {
    const projectLink = element('a', 'project-link');
    projectLink.href = project.url;
    projectLink.target = '_blank';
    projectLink.rel = 'noreferrer';
    projectLink.setAttribute(
      'aria-label',
      `View ${project.title} source code on GitHub (opens in a new tab)`,
    );
    projectLink.append(document.createTextNode('View source'));
    const arrow = element('span', '', '↗');
    arrow.setAttribute('aria-hidden', 'true');
    projectLink.append(arrow);
    footer.append(projectLink);
  } else {
    footer.append(element('span', 'project-link--disabled', 'Details coming soon'));
  }

  card.append(header, signal, body, footer);
  return card;
}

function updateProjectCounts() {
  const counts = projects.reduce(
    (totals, project) => {
      if (totals[project.status] !== undefined) totals[project.status] += 1;
      totals.all += 1;
      return totals;
    },
    { all: 0, completed: 0, building: 0, planned: 0 },
  );

  Object.entries(counts).forEach(([status, count]) => {
    document.querySelectorAll(`[data-filter-count="${status}"]`).forEach((node) => {
      node.textContent = count;
    });
  });

  document.querySelectorAll('[data-project-count]').forEach((node) => {
    node.textContent = counts.all;
  });
}

function revealElement(node) {
  if (node.classList.contains('is-visible')) return;
  node.classList.add('is-visible');
  revealObserver?.unobserve(node);
}

function revealElementsInViewport(scope = document) {
  const viewportHeight = document.documentElement.clientHeight || window.innerHeight;
  const revealElements = scope.querySelectorAll('[data-reveal]:not(.is-visible)');

  revealElements.forEach((node) => {
    const bounds = node.getBoundingClientRect();
    if (bounds.top <= viewportHeight * 0.98 && bounds.bottom >= 0) {
      revealElement(node);
    }
  });
}

function observeRevealElements(scope = document) {
  const revealElements = scope.querySelectorAll('[data-reveal]:not(.is-visible)');

  if (!revealObserver || prefersReducedMotion) {
    revealElements.forEach(revealElement);
    return;
  }

  if (!revealSystemReady) return;
  revealElements.forEach((node) => revealObserver.observe(node));
}

function startRevealSystem() {
  if (revealSystemReady) return;
  revealSystemReady = true;
  window.clearTimeout(revealStartTimer);
  document.documentElement.classList.add('motion-ready');
  revealElementsInViewport();
  observeRevealElements();
}

function queueRevealFallback() {
  if (!revealSystemReady || revealFallbackFrame) return;
  revealFallbackFrame = window.requestAnimationFrame(() => {
    revealFallbackFrame = undefined;
    revealElementsInViewport();
  });
}

function renderProjects(filter = 'all') {
  if (!projectsGrid || !projectEmpty || !projectResult) return;

  const visibleProjects =
    filter === 'all'
      ? projects
      : projects.filter((project) => project.status === filter);

  const fragment = document.createDocumentFragment();
  visibleProjects.forEach((project) => {
    const originalIndex = projects.indexOf(project);
    fragment.append(createProjectCard(project, originalIndex));
  });

  projectsGrid.replaceChildren(fragment);
  projectsGrid.hidden = visibleProjects.length === 0;
  projectEmpty.hidden = visibleProjects.length !== 0;

  projectResult.textContent =
    filter === 'all'
      ? `Showing all ${visibleProjects.length} projects`
      : `Showing ${visibleProjects.length} ${statusLabels[filter] || filter} projects`;

  observeRevealElements(projectsGrid);
}

function initialiseProjectFilters() {
  updateProjectCounts();
  renderProjects();

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter || 'all';

      filterButtons.forEach((item) => {
        const active = item === button;
        item.classList.toggle('is-active', active);
        item.setAttribute('aria-pressed', String(active));
      });

      renderProjects(filter);
    });
  });
}

function initialiseReveals() {
  // Keep content visible when motion cannot be initialized safely.
  if (!('IntersectionObserver' in window) || prefersReducedMotion) {
    document.querySelectorAll('[data-reveal]').forEach(revealElement);

    if (!prefersReducedMotion) {
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          document.documentElement.classList.add('motion-ready');
        });
      });
    }
    return;
  }

  revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        revealElement(entry.target);
      });
    },
    {
      rootMargin: '0px 0px -8% 0px',
      threshold: 0.08,
    },
  );

  document.documentElement.classList.add('reveals-ready');
  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(startRevealSystem);
  });
  revealStartTimer = window.setTimeout(startRevealSystem, 240);

  window.addEventListener('scroll', queueRevealFallback, { passive: true });
  window.addEventListener('resize', queueRevealFallback);
  window.addEventListener('pageshow', queueRevealFallback);
}

function initialiseMenu() {
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const brandLink = document.querySelector('.brand[href="#top"]');

  if (!menuToggle || !mobileMenu) return;

  const menuLinks = [...mobileMenu.querySelectorAll('a')];
  mobileMenu.inert = true;

  function closeMenu({ returnFocus = false } = {}) {
    mobileMenu.classList.remove('is-open');
    menuToggle.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation menu');
    mobileMenu.setAttribute('aria-hidden', 'true');
    mobileMenu.inert = true;
    document.body.classList.remove('menu-open');

    if (returnFocus) menuToggle.focus();
  }

  function openMenu() {
    mobileMenu.scrollTop = 0;
    mobileMenu.inert = false;
    mobileMenu.classList.add('is-open');
    menuToggle.classList.add('is-open');
    menuToggle.setAttribute('aria-expanded', 'true');
    menuToggle.setAttribute('aria-label', 'Close navigation menu');
    mobileMenu.setAttribute('aria-hidden', 'false');
    document.body.classList.add('menu-open');
  }

  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    if (isOpen) closeMenu({ returnFocus: true });
    else openMenu();
  });

  menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  brandLink?.addEventListener('click', () => {
    if (menuToggle.getAttribute('aria-expanded') === 'true') closeMenu();
  });

  document.addEventListener('keydown', (event) => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    if (!isOpen) return;

    if (event.key === 'Escape') {
      event.preventDefault();
      closeMenu({ returnFocus: true });
      return;
    }

    if (event.key !== 'Tab' || menuLinks.length === 0) return;

    const firstLink = menuLinks[0];
    const lastLink = menuLinks[menuLinks.length - 1];

    if (event.shiftKey && document.activeElement === firstLink) {
      event.preventDefault();
      lastLink.focus();
    } else if (!event.shiftKey && document.activeElement === lastLink) {
      event.preventDefault();
      firstLink.focus();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 920) closeMenu();
  });
}

function initialiseHeader() {
  const header = document.querySelector('.site-header');
  const navLinks = [...document.querySelectorAll('.desktop-nav a[href^="#"]')];
  const sections = [...document.querySelectorAll('main section[id]')];

  function updateHeader() {
    header?.classList.toggle('is-scrolled', window.scrollY > 16);
  }

  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  if (!('IntersectionObserver' in window)) return;

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      const visibleEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visibleEntry) return;

      navLinks.forEach((link) => {
        link.classList.toggle(
          'is-active',
          link.getAttribute('href') === `#${visibleEntry.target.id}`,
        );
      });
    },
    {
      rootMargin: '-28% 0px -62% 0px',
      threshold: [0, 0.1, 0.3],
    },
  );

  sections.forEach((section) => sectionObserver.observe(section));
}

function initialiseFooterYear() {
  const currentYear = document.getElementById('currentYear');
  if (currentYear) currentYear.textContent = new Date().getFullYear();
}

function restoreDeepLink() {
  if (!window.location.hash) return;

  const destination = getAnchorDestination(window.location.hash);
  if (!destination) return;

  // Project cards are generated at runtime, so repeat the browser's initial
  // fragment jump after the page structure has reached its final height.
  window.requestAnimationFrame(() => {
    scrollToAnchor(destination, { animate: false });
  });
}

initialiseReveals();
initialiseProjectFilters();
initialiseMenu();
initialiseHeader();
initialiseFooterYear();
initialiseAnchorNavigation();
restoreDeepLink();
