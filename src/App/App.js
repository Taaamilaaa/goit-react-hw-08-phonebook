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

// import { getIsAuth } from 'redux/auth/authSelector';
const isAuth = true
const App = () => {
  
  return (
    <div className="container">
      <header className="header">
        <Header />       
        
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
