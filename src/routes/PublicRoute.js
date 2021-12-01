import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ isAuth, component: Component}) => {
  return (
    <>
    
      {isAuth ? (<p>переключить на contact</p>) : <Component />}
    </>
  );
};
