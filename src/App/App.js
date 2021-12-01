import './App.css';

// import Form from 'components/Form/Form';
// import ContactList from 'components/ContactList/ContactList';
// import Filter from 'components/Filter/Filter';
// import { Container } from 'components/Container/Container';
// import { useFetchContactsQuery } from 'redux/contacts/contactsSlice';
// import { Toaster } from 'react-hot-toast';
// import { useState } from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
// import Loader from 'react-loader-spinner';
import { Routes, Route } from 'react-router';
import {Header} from "components/Header/Header"
import { ContactsPage } from 'pages/ContactsPage';
import { LoginPage } from 'pages/LoginPage';
import { RegisterPage } from 'pages/RegisterPage';
import { PrivateRoute } from 'routes/PrivateRoute';
import { PublicRoute } from 'routes/PublicRoute';
import { HomePage } from 'pages/HomePage';

import { getIsAuth } from 'redux/auth/authSelector';

const App = () => {
  const isAuth = getIsAuth;
  return (
    <div className="container">
      <header className="header">
        <Header isAuth={ isAuth}/>
        {/* {isAuth?<UserMenu isAuth={ isAuth}/>:<AuthNavigation />} */}
        
        
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
