import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PasswordReset from './pages/PasswordReset';
import ChangePassword from './pages/ChangePassword';

import { AppProviders } from './AppProvider';

export default function App() {

  return (
    <AppProviders>
      <Router>
        <Switch>
          <Route exact path="/" component={PasswordReset} />
          <Route exact path="/changepassword/:hash" component={ChangePassword} />
        </Switch>
      </Router>
    </AppProviders>
  );
}
