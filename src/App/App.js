import './App.css';
import { Navigation } from 'components/Navigation/Navigation';
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
import { ContactsPage } from 'pages/ContactsPage';
import { LoginPage } from 'pages/LoginPage';
import { RegisterPage } from 'pages/RegisterPage';
import { PrivateRoute } from 'routes/PrivateRoute';
import { PublicRoute } from 'routes/PublicRoute';

const isAuth = false;

const App = () => {
  // const { data: contacts, isFetching } = useFetchContactsQuery();
  // const [filter, setFilter] = useState('');

  // const onFilterChange = value => {
  //   setFilter(value);
  // };
  // console.log(contacts);
  return (
    <div className="container">
      <header>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route
            path="/"
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
        {/* <Container title="Phonebook">
          <Container>
            <Form />
          </Container>

          {contacts && (
            <Container title="Contacts">
              <Filter onFilterChange={onFilterChange} />
              <ContactList filter={filter} />
            </Container>
          )}
          {isFetching && (
            <Loader
              type="Watch"
              className="loader"
              color="rgba(114, 27, 27, 0.787)"
              height={200}
              width={200}
            />
          )}

          <Toaster />
        </Container> */}
      </main>
    </div>
  );
};

export default App;
