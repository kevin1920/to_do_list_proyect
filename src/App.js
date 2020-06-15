import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Login from './components/login'

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Login}/>
    </BrowserRouter>
  );
}

export default App;
