/**
 * Portfolio project catalog
 *
 * Add future work by copying an entry and setting its status to:
 *   "completed" — released work
 *   "building"  — actively in progress
 *   "planned"   — public roadmap work
 *
 * The portfolio automatically updates the cards, filter counts, and empty states.
 * A URL is optional, which is useful for projects that are not public yet.
 */
window.portfolioProjects = [
  {
    title: 'SwiftCart',
    kind: 'Commerce platform',
    status: 'completed',
    accent: '#c9ff63',
    description:
      'A NestJS microservices monorepo for modern commerce, with an API gateway and dedicated services for identity, products, inventory, orders, payments, and notifications.',
    tags: [
      'TypeScript',
      'NestJS',
      'PostgreSQL',
      'Redis',
      'RabbitMQ',
      'JWT',
      'TypeORM',
      'Docker',
      'Kubernetes',
      'Axios',
    ],
    url: 'https://github.com/JheyTim/swiftcart-backend',
  },
  {
    title: 'Personal Document Vault',
    kind: 'Security & storage',
    status: 'completed',
    accent: '#72c7ff',
    description:
      'A secure REST API for uploading, organizing, and managing personal documents with encrypted data flows and private cloud object storage.',
    tags: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose',
      'AWS S3',
      'bcrypt',
      'JWT',
      'Crypto',
      'Multer',
    ],
    url: 'https://github.com/JheyTim/Personal-Document-Vault',
  },
  {
    title: 'Real-Time Chat Backend',
    kind: 'Realtime communications',
    status: 'completed',
    accent: '#ff9f68',
    description:
      'A secure real-time messaging backend with Socket.IO, Google OAuth, role-based access, file uploads, and production-minded rate limiting.',
    tags: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose',
      'Socket.IO',
      'OAuth 2.0',
      'JWT',
      'Multer',
      'AWS S3',
      'Helmet',
      'Rate limiting',
    ],
    url: 'https://github.com/JheyTim/Real-Time-Chat-Backend',
  },
  {
    title: 'Book Recommendation',
    kind: 'Discovery service',
    status: 'completed',
    accent: '#f3d56b',
    description:
      'A NestJS application for book discovery, search, reviews, and personalized recommendations powered by the Google Books API.',
    tags: ['NestJS', 'MongoDB', 'Mongoose', 'JWT', 'Axios', 'bcrypt'],
    url: 'https://github.com/JheyTim/Book-Recommendation',
  },
  {
    title: 'Crypto Price Tracker',
    kind: 'Market data API',
    status: 'completed',
    accent: '#6ee7d8',
    description:
      'A cryptocurrency tracking service with live price updates, portfolio management, alerts, scheduled jobs, and historical market data.',
    tags: [
      'Node.js',
      'Express.js',
      'TypeScript',
      'MongoDB',
      'Mongoose',
      'WebSocket',
      'node-cron',
      'JWT',
      'bcrypt',
      'Winston',
    ],
    url: 'https://github.com/JheyTim/Crypto-Price-Tracker',
  },
  {
    title: 'Movie Reservation System',
    kind: 'Booking platform',
    status: 'completed',
    accent: '#ff8fb3',
    description:
      'A reservation backend for browsing films and showtimes, booking individual seats, managing customer reservations, and generating reports.',
    tags: ['Node.js', 'Express.js', 'Sequelize', 'MySQL', 'JWT', 'bcrypt'],
    url: 'https://github.com/JheyTim/Movie-Reservation-System',
  },
  {
    title: 'Healthcare Management System',
    kind: 'Healthtech platform',
    status: 'completed',
    accent: '#8df1b5',
    description:
      'A healthcare platform for appointments, secure document exchange, billing, payments, and real-time communication between patients and providers.',
    tags: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose',
      'JWT',
      'bcrypt',
      'Speakeasy',
      'Stripe',
      'Multer',
      'Socket.IO',
      'Winston',
      'node-cron',
    ],
    url: 'https://github.com/JheyTim/healthcare-management-system',
  },
];

/*
Future project example:

{
  title: 'Project name',
  kind: 'Project category',
  status: 'planned',
  accent: '#9b8cff',
  description: 'A concise description of what the project will solve.',
  tags: ['TypeScript', 'NestJS'],
  url: null,
},
*/
