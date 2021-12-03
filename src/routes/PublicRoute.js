import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PublicRoute = ({ component: Component }) => {
  const isAuth = useSelector(state=>state.auth.isAuth)
  return isAuth ? <Navigate to = "/login" /> : <Component />
    
  
};
