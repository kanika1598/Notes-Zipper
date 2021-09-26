import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LandingPage from './screens/LandingPage/LandingPage';
import MyNotes from './screens/MyNotes/MyNotes';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';

function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/register" component={RegisterScreen} />
          <Route exact path="/my-notes" component={MyNotes} />
        </Switch>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
