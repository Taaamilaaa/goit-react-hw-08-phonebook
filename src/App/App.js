import './App.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Routes, Route } from 'react-router';
import { Header } from 'components/Header/Header';
import { ContactsPage } from 'pages/ContactsPage';
import { LoginPage } from 'pages/LoginPage';
import { RegisterPage } from 'pages/RegisterPage';
import { PrivateRoute } from 'routes/PrivateRoute';
import { PublicRoute } from 'routes/PublicRoute';
import { HomePage } from 'pages/HomePage';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { currentThunk } from 'redux_/auth/thunks';
import Loader from 'react-loader-spinner';

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
      <header className="header">
        <Header isAuth={isAuth} />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<PublicRoute />}>
            <Route path="/" element={<HomePage />} />
          </Route>
          <Route path="/register" element={<PublicRoute restricted />}>
            <Route path="/register" element={<RegisterPage />} />
          </Route>
          <Route
            path="/login"
            element={<PublicRoute restricted redirectTo="/contacts" />}
          >
            <Route path="/login" element={<LoginPage />} />
          </Route>
          <Route
            path="/contacts"
            element={<PrivateRoute redirectTo="/" />}
          >
            <Route path="/contacts" element={<ContactsPage />} />
          </Route>
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
    </div>
  );
};

export default App;
