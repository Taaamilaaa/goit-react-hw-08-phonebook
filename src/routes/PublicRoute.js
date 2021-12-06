import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ component: Component, isAuth }) => {
  return isAuth ? <Navigate to={'/contacts'} /> : <Component />;
};
