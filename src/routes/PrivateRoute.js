import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PrivateRoute = ({ redirectTo = '/' }) => {
   const isAuth = useSelector(state=>state.auth.isAuth)
   return isAuth ? <Outlet /> : <Navigate to={redirectTo} />
}