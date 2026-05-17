// ── CUSTOM CURSOR ──
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let mx = 0,
  my = 0,
  rx = 0,
  ry = 0;
document.addEventListener('mousemove', (e) => {
  mx = e.clientX;
  my = e.clientY;
});
(function animCursor() {
  cursor.style.left = mx + 'px';
  cursor.style.top = my + 'px';
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = rx + 'px';
  ring.style.top = ry + 'px';
  requestAnimationFrame(animCursor);
})();
document
  .querySelectorAll('a,button,.project-card,.stat-cell')
  .forEach((el) => {
    el.addEventListener('mouseenter', () => {
      ring.style.width = '56px';
      ring.style.height = '56px';
      ring.style.opacity = '0.8';
    });
    el.addEventListener('mouseleave', () => {
      ring.style.width = '36px';
      ring.style.height = '36px';
      ring.style.opacity = '0.5';
    });
  });

// ── MOBILE NAV ──
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('open');
  hamburger.classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
});
function closeMenu() {
  mobileMenu.classList.remove('open');
  hamburger.classList.remove('open');
  document.body.style.overflow = '';
}

// ── SCROLL REVEAL ──
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        // Clear the stagger delay after entrance finishes so hover is instant
        const delay =
          parseFloat(e.target.style.transitionDelay || '0') * 1000;
        setTimeout(() => {
          e.target.style.transitionDelay = '0s';
        }, delay + 900);
      }
    });
  },
  { threshold: 0.1 },
);
document
  .querySelectorAll('.fade-up,.fade-left,.fade-right,.section-header')
  .forEach((el) => revealObserver.observe(el));

// ── SKILL ITEMS staggered reveal ──
const skillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        e.target.querySelectorAll('.skill-item').forEach((item, i) => {
          item.style.cssText = 'opacity:0;transform:translateX(-14px)';
          setTimeout(
            () => {
              item.style.cssText =
                'transition:opacity 0.4s ease,transform 0.4s ease,background 0.2s,padding-left 0.25s,color 0.2s;opacity:1;transform:translateX(0)';
            },
            i * 55 + 150,
          );
        });
      }
    });
  },
  { threshold: 0.15 },
);
document
  .querySelectorAll('#skills .fade-up')
  .forEach((el) => skillObserver.observe(el));

// ── COUNTER ANIMATION ──
function countUp(el, target, duration = 1100) {
  let current = 0;
  const incrementTime = duration / target;
  const timer = setInterval(() => {
    current++;
    el.childNodes[0].textContent = current;
    if (current >= target) {
      clearInterval(timer);
      el.childNodes[0].textContent = target;
    }
  }, incrementTime);
}
const statObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        const numEl = e.target.querySelector('.stat-num');
        if (numEl && !numEl.dataset.counted) {
          numEl.dataset.counted = '1';
          const val = parseInt(numEl.dataset.count || numEl.textContent);
          if (!isNaN(val)) countUp(numEl, val);
        }
      }
    });
  },
  { threshold: 0.6 },
);
document
  .querySelectorAll('.stat-cell')
  .forEach((el) => statObserver.observe(el));
