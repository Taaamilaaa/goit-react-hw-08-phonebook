import './App.css';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import { Routes, Route } from 'react-router';
import {Header} from "components/Header/Header"
import { ContactsPage } from 'pages/ContactsPage';
import { LoginPage } from 'pages/LoginPage';
import { RegisterPage } from 'pages/RegisterPage';
import { PrivateRoute } from 'routes/PrivateRoute';
import { PublicRoute } from 'routes/PublicRoute';
import { HomePage } from 'pages/HomePage';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { currentThunk } from 'redux_/auth/thunks';

const App = () => {
  const isAuth = useSelector(state => state.auth.isAuth);
  const currentUser = useSelector(state => state.auth.token); 
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentUser === '') { return };
    dispatch(currentThunk());
    // eslint-disable-next-line
  },[dispatch],);
  return (
    <div className="container">
      <header className="header">
        <Header isAuth={ isAuth}/>
        
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
            element={<PublicRoute component={LoginPage} isAuth={isAuth} />}
          />
          <Route
            path="/register"
            element={
              <PublicRoute component={RegisterPage} isAuth={isAuth} />}
          />
        </Routes>       
      </main>
    </div>
  );
};

export default App;
