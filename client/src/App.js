import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RegisterComponent from './components/RegisterComponent';
import LoginComponent from './components/LoginComponent';
import ProfileComponent from './components/ProfileComponent';
import TaskComponent from './components/TaskComponent';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <UserProvider>
      <Router>
        <Switch>
          <Route path="/register" component={RegisterComponent} />
          <Route path="/login" component={LoginComponent} />
          <Route path="/profile" component={ProfileComponent} />
          <Route path="/tasks" component={TaskComponent} />
        </Switch>
      </Router>
    </UserProvider>
  );
}

export default App;
