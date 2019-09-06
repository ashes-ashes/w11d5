import React from "react";
import { Route } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './form/login_form_container';
import SignupFormContainer from './form/signup_form_container';
import BenchIndexContainer from './bench_index_container';
import { AuthRoute } from '../util/routes_util';

const App = () => (
  <div>
    <header>
      <h1>benchBnB</h1>
      <GreetingContainer />
    </header>
    
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
    <Route exact path="/" component={BenchIndexContainer} />
  </div>
);

export default App;