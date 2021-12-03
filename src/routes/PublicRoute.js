import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PublicRoute = ({ restricted = false, redirectTo = '/' }) => {
  const isAuth = useSelector(state => state.auth.isAuth)
  const redirect = isAuth && restricted; 
  return redirect ? <Navigate to={redirectTo} />  : <Outlet />
    
  
};
