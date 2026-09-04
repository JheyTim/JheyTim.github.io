/**
 * Portfolio certifications
 *
 * Add a certification by copying the template at the bottom into
 * `window.portfolioCertifications`. Cards are sorted by issue date, and the
 * certification count updates automatically.
 *
 * Provider details live here so each certification only needs a provider key.
 * Add another provider preset here if a future credential uses a new issuer.
 */
window.portfolioCertificationProviders = {
  udemy: {
    name: 'Udemy',
    type: 'Course certificate',
    mark: 'U',
    accent: 'var(--udemy)',
    markClass: '',
  },
  aws: {
    name: 'Amazon Web Services',
    type: 'Digital badge',
    mark: 'aws',
    accent: 'var(--aws)',
    markClass: 'credential-provider-mark--aws',
  },
  mongodb: {
    name: 'MongoDB',
    type: 'Certification',
    mark: 'M',
    accent: 'var(--mongodb)',
    markClass: 'credential-provider-mark--mongodb',
  },
};

window.portfolioCertifications = [
  {
    title: 'JavaScript Unit Testing - The Practical Guide',
    provider: 'udemy',
    issued: '2026-01-04',
    credentialId: 'UC-7cb52c53-024a-44c5-a578-cc728f387b38',
    skills: ['Unit Testing', 'Vitest'],
    url: 'https://www.udemy.com/certificate/UC-7cb52c53-024a-44c5-a578-cc728f387b38/',
  },
  {
    title: 'Docker & Kubernetes: The Practical Guide',
    provider: 'udemy',
    issued: '2025-12-24',
    credentialId: 'UC-eb98ef82-6b05-48f3-ac41-75ab6805243d',
    skills: ['Docker', 'Kubernetes'],
    url: 'https://www.udemy.com/certificate/UC-eb98ef82-6b05-48f3-ac41-75ab6805243d/',
  },
  {
    title: 'Web Security & Bug Bounty: Learn Penetration Testing',
    provider: 'udemy',
    issued: '2025-09-01',
    credentialId: 'UC-cc9a45dd-c9b9-4070-9f4f-7bbb75098ec9',
    skills: ['Web Security', 'Penetration Testing'],
    url: 'https://www.udemy.com/certificate/UC-cc9a45dd-c9b9-4070-9f4f-7bbb75098ec9/',
  },
  {
    title: 'NestJS Zero to Hero - Modern TypeScript Back-end Development',
    provider: 'udemy',
    issued: '2024-12-08',
    credentialId: 'UC-f25b65ab-c3ab-401a-a39f-64e7e3a8bac7',
    skills: ['NestJS', 'TypeORM'],
    url: 'https://www.udemy.com/certificate/UC-f25b65ab-c3ab-401a-a39f-64e7e3a8bac7/',
  },
  {
    title: 'GitLab CI/CD: Pipelines, CI/CD and DevOps for Beginners',
    provider: 'udemy',
    issued: '2024-09-12',
    credentialId: 'UC-812a4b98-d898-4c3c-8e34-820b5e9b39f4',
    skills: ['CI/CD', 'GitLab'],
    url: 'https://www.udemy.com/certificate/UC-812a4b98-d898-4c3c-8e34-820b5e9b39f4/',
  },
  {
    title: 'JavaScript Architecture: Design Patterns & SOLID Principles',
    provider: 'udemy',
    issued: '2024-08-26',
    credentialId: 'UC-459d95e3-acc2-46dd-abbc-f9cc966e8693',
    skills: ['Design Patterns', 'SOLID'],
    url: 'https://www.udemy.com/certificate/UC-459d95e3-acc2-46dd-abbc-f9cc966e8693/',
  },
  {
    title: 'Understanding TypeScript',
    provider: 'udemy',
    issued: '2024-07-10',
    credentialId: 'UC-57c6a044-36fc-4311-a168-520605f9bcad',
    skills: ['TypeScript'],
    url: 'https://www.udemy.com/certificate/UC-57c6a044-36fc-4311-a168-520605f9bcad/',
  },
  {
    title: 'Object-oriented Programming in JavaScript',
    provider: 'udemy',
    issued: '2024-04-16',
    credentialId: 'UC-580cd10a-df51-41a2-b79f-d65d0a2a16fd',
    skills: ['OOP', 'JavaScript'],
    url: 'https://www.udemy.com/certificate/UC-580cd10a-df51-41a2-b79f-d65d0a2a16fd/',
  },
  {
    title: 'AWS Cloud Quest: Solutions Architect',
    provider: 'aws',
    issued: '2024-02-21',
    credentialId: '9344d02e-1008-4b43-8de8-9c56342b5057',
    skills: ['AWS', 'Solutions Architecture'],
    url: 'https://www.credly.com/badges/9344d02e-1008-4b43-8de8-9c56342b5057/linked_in_profile',
  },
  {
    title: 'AWS Cloud Quest: Cloud Practitioner',
    provider: 'aws',
    issued: '2024-02-14',
    credentialId: 'bfaba084-d531-4ac2-aa53-b828a4e84982',
    skills: ['AWS', 'Cloud Fundamentals'],
    url: 'https://www.credly.com/badges/bfaba084-d531-4ac2-aa53-b828a4e84982/linked_in_profile',
  },
  {
    title: 'SI Associate Certification Program',
    provider: 'mongodb',
    issued: '2023-08-10',
    credentialId: 'MDBvs0hyrl2sp',
    skills: ['MongoDB'],
    url: 'https://learn.mongodb.com/c/MPYijCo2QO2rCfFenjWhiA',
  },
  {
    title: 'Serverless Framework Bootcamp: Node.js, AWS & Microservices',
    provider: 'udemy',
    issued: '2021-10-08',
    credentialId: 'UC-4a129961-4138-4662-a54f-47edeffc523c',
    skills: ['Serverless Framework', 'AWS'],
    url: 'https://www.udemy.com/certificate/UC-4a129961-4138-4662-a54f-47edeffc523c/',
  },
  {
    title: 'Git from Basics to Advanced: Practical Guide for Developers',
    provider: 'udemy',
    issued: '2021-08-11',
    credentialId: 'UC-10d559b1-4850-44a4-8088-a8da0db6ead8',
    skills: ['Git'],
    url: 'https://www.udemy.com/certificate/UC-10d559b1-4850-44a4-8088-a8da0db6ead8/',
  },
  {
    title: 'NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)',
    provider: 'udemy',
    issued: '2021-07-24',
    credentialId: 'UC-91853869-f8e8-4843-8ece-3a72cb6cd829',
    skills: ['Node.js', 'REST APIs', 'GraphQL'],
    url: 'https://www.udemy.com/certificate/UC-91853869-f8e8-4843-8ece-3a72cb6cd829/',
  },
  {
    title: 'The Complete Node.js Developer Course (3rd Edition)',
    provider: 'udemy',
    issued: '2021-07-16',
    credentialId: 'UC-c882a6d1-a985-4985-be76-ed1b310f534f',
    skills: ['Node.js', 'Express.js'],
    url: 'https://www.udemy.com/certificate/UC-c882a6d1-a985-4985-be76-ed1b310f534f/',
  },
];

/*
Future certification template:

{
  title: 'Certification name',
  provider: 'udemy',
  issued: '2026-01-31',
  credentialId: 'Credential ID',
  skills: ['Skill one', 'Skill two'],
  url: 'https://credential-verification-link.example/',
},

Valid provider keys: 'udemy', 'aws', and 'mongodb'.
Use the YYYY-MM-DD format for issued dates.
*/
