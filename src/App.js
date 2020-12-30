import React from 'react';
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from './pages';
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Router>
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/login' component={Login} />
            <Route exact path='*' component={Error} />
          </Switch>
        </Router>
      </BrowserRouter>

    </div>
  );
}

export default App;
