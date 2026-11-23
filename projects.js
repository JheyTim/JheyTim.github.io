/**
 * Portfolio projects
 *
 * Add AI applications to `window.portfolioAIProjects` and backend work to
 * `window.portfolioBackendProjects`. Keep the newest or most relevant work
 * near the top of its own list, then choose one of these statuses:
 *
 *   "completed" — released work
 *   "building"  — actively in progress
 *   "planned"   — public roadmap work
 *
 * Cards, tabs, filters, counts, and empty states update automatically. Set
 * `url` to `null` for private work; `note` is displayed in its place.
 */
window.portfolioAIProjects = [
  {
    title: 'AI Document Intelligence',
    kind: 'AI document processing',
    status: 'completed',
    accent: '#72c7ff',
    description:
      'A Streamlit app that extracts full text, key-value fields, tables, and uncertain text from document images with OpenAI’s Responses API. Document profiles, JSON Schema checks, content warnings, and TXT, Markdown, and JSON exports help make each result reviewable.',
    tags: [
      'Python',
      'Streamlit',
      'OpenAI Responses API',
      'Multimodal AI',
      'Document Processing',
      'JSON Schema',
    ],
    url: 'https://github.com/JheyTim/ai-document-intelligence',
  },
  {
    title: 'Digital Twin',
    kind: 'AI career assistant',
    status: 'completed',
    accent: '#9b8cff',
    description:
      'A career-focused chatbot grounded in my LinkedIn profile and personal summary. Built with Gradio and OpenAI chat completions, it uses tool calls to notify me through Pushover about contact requests and questions it could not answer.',
    tags: ['Python', 'Gradio', 'OpenAI API', 'LLM Tool Calling', 'Pushover'],
    url: 'https://github.com/JheyTim/digital-twin',
  },
];

window.portfolioBackendProjects = [
  {
    title: 'Multi-channel payment integrations',
    kind: 'Payments platform',
    status: 'completed',
    accent: '#c9ff63',
    description:
      'Built serverless backend APIs and GraphQL services for a payment platform supporting e-wallets, cards, direct debit, and online banking. Partnered with frontend engineers to integrate consumer and corporate payment flows.',
    tags: [
      'Serverless Framework',
      'AWS',
      'GraphQL',
      'Payments',
      'API Integration',
    ],
    url: null,
    note: 'Client work · Private',
  },
  {
    title: 'Digital wallet services',
    kind: 'Financial technology',
    status: 'completed',
    accent: '#72c7ff',
    description:
      'Served as backend sub-lead for a mobile wallet supporting bill payments, prepaid mobile load, RFID top-ups, wallet transfers, and QR payments. Delivered serverless APIs, maintained API documentation, coordinated mobile integration, and onboarded backend engineers.',
    tags: [
      'Serverless Framework',
      'AWS',
      'REST APIs',
      'API Documentation',
      'Backend Leadership',
    ],
    url: null,
    note: 'Client work · Private',
  },
  {
    title: 'Telecommunications API integrations',
    kind: 'Integration platform',
    status: 'completed',
    accent: '#9b8cff',
    description:
      'Developed and documented serverless APIs for a centralized integration layer that standardized services across mobile, fixed-line, and broadband channels.',
    tags: [
      'Serverless Framework',
      'AWS',
      'REST APIs',
      'API Integration',
      'API Documentation',
    ],
    url: null,
    note: 'Client work · Private',
  },
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
To add work later, copy the template into the matching AI or Backend array.
The array determines the tab automatically; no `track` property is needed.

Future project template:

{
  title: 'Project name',
  kind: 'Project category',
  status: 'planned',
  accent: '#9b8cff',
  description: 'A concise description of what the project does.',
  tags: ['TypeScript', 'NestJS'],
  url: null,
  note: 'Details coming soon',
},

Valid statuses: 'completed', 'building', and 'planned'.
The note is only displayed when url is null.
*/
