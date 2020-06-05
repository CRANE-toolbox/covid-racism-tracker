//All possible routes for the application. Modification here will have a global affect

export const Routes = {
  HOME: '/',
  DATA: '/data',
  SUPPORT: '/support',
  PARTNERS: '/partners',
  ABOUT: '/about',
} as const;

export const ExternalRoutes = {
  GITHUB: '/redirect/github',
  DEVPOST: '/redirect/devpost',
  EMAILUS: '/redirect/emailus',
} as const;
