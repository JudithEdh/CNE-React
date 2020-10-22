import React from 'react';
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import "../src/components/Styling/style.css";
import EmployeeInfo from './components/Fetch/EmployeeInfo';
import Fetch from './components/Fetch/Fetch';

function App() {
  return (
    <div> 
     {/* <Fetch/> */}
     <EmployeeInfo/>
    </div>
  );
}

export default App;
