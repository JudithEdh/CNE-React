import React from 'react';
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import "../src/components/Styling/style.css";
import About from './components/Routing/About';
import DummyPage from './components/Routing/dummy';
import Home from './components/Routing/Home';
import Nav from './components/Routing/Nav';
import Shop from './components/Routing/Shop';
import Users from './components/Routing/Users';

function App() {
  return (
    <div> 
      <Nav/>
      <Router>
        <Switch>
          <Route path="/" component={DummyPage} exact/>
          <Route path="/about" component={About} />
          <Route path="/shop" component={Shop}/>
          <Route path="/users/:id" component={Users}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
