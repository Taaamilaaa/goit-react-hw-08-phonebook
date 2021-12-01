import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ isAuth, component: Component}) => {
  return (
    <>
    
      {isAuth ? <Navigate to="/" /> : <Component />}
    </>
  );
};
