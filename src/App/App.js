import './App.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Routes, Route } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { lazy, Suspense } from 'react';
import Loader from 'react-loader-spinner';
import { PrivateRoute } from 'routes/PrivateRoute'; 
import { PublicRoute } from 'routes/PublicRoute';
import { Header } from 'components/Header/Header';
import { currentThunk } from 'redux_/auth/thunks';

const HomePage = lazy(() => import('pages/HomePage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));


const App = () => {
  const isAuth = useSelector(state => state.auth.isAuth);
  const currentUser = useSelector(state => state.auth.token);
  const isLoading = useSelector(
    state => state.contacts.isLoading || state.auth.isLoading,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentUser === '') {
      return;
    }
    dispatch(currentThunk());
    // eslint-disable-next-line
  }, [dispatch]);
  return (
    <div className="container">
      <Suspense fallback = {<Loader
            className="loader"
            type="Puff"
            color="rgba(61, 16, 16, 0.411)"
            height={150}
            width={150}
          />}>
         <header className="header">
        <Header isAuth={isAuth} />
      </header>
        <main>
           <Routes>
          <Route
            path="/"
            element={<PrivateRoute component={HomePage} isAuth={isAuth} />}
          />
          <Route
            path="/contacts"
            element={<PrivateRoute component={ContactsPage} isAuth={isAuth} />}
          />
          <Route
            path="/login"
            element={<PublicRoute component={LoginPage} isAuth={isAuth}  />}
          />
          <Route
            path="/register"
            element={<PublicRoute component={RegisterPage} isAuth={isAuth} />}
          />
        </Routes>    
        {isLoading && (
          <Loader
            className="loader"
            type="Puff"
            color="rgba(61, 16, 16, 0.411)"
            height={150}
            width={150}
          />
        )}
      </main>
      </Suspense>     
    </div>
  );
};

export default App;
