import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PrivateRoute = ({component: Component}) => {
   const isAuth = useSelector(state=>state.auth.isAuth)
   return isAuth ? <Component /> : <Navigate to="/" / >
}