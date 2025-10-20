import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

// project import
import MainRoutes from './MainRoutes';

const AuthenticationRoutes = lazy(() => import('./AuthenticationRoutes'));
const AuthLogin = lazy(() => import('../views/auth/login'))
// ==============================|| ROUTING RENDER ||============================== //

const router = createBrowserRouter(
  [
    AuthenticationRoutes,
    {
      path: '/',
      element: <AuthLogin />
    },
    MainRoutes
  ],
  { basename: import.meta.env.VITE_APP_BASE_NAME }
);

export default router;
