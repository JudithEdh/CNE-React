import React from 'react';
import MyInfo from './components/MyInfo';

function App() {
  return (
    <div>
      {/* This gets gets translated and pushed into index.html */}
      <p>hello friends</p>
      {/* Calling a component from another class */}
      <MyInfo/>
    </div>
  );
}

export default App;
