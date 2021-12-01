import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, isAuth }) => {
   return <>{isAuth ? <Component /> : <Navigate />}</>;
}