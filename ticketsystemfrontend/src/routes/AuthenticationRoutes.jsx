import { Children, lazy } from "react";

const LoginPage = lazy(() => import('views/auth/login'));


const AuthenticationRoutes = {
    path: '/',
    children: [
        {
            path: '/',
            element: <LoginPage />
        }
    ]
}
export default AuthenticationRoutes;