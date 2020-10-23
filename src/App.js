import React from 'react';
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import "../src/components/Styling/style.css";
import Login from './components/ConditionalRendering/Example';
import UserProfile from './components/StaticData/User';

function App() {
  return (
    <div> 
     {/* <Login isLoggedIn={true}/> */}
     <UserProfile/>
    </div>
  );
}

export default App;
