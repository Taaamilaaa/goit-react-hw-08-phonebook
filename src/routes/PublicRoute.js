import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ isAuth, component: Component}) => {
  return (
    <>
      <h2>PUBLIC</h2>
      {isAuth ? <Navigate to="/" /> : <Component />}
    </>
  );
};
