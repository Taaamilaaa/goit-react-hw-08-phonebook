import { Navigate } from "react-router-dom";
export const PrivateRoute = ({ isAuth, component: Component}) => {
    return <>
        <h2>PRIVATE</h2>
        {isAuth ? <Component /> : <Navigate to="/login" />}</>;
}