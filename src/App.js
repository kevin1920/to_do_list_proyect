import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Login from './components/login'
import Projects from './pages/projects'



function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Projects}/>
    </BrowserRouter>
  );
}

export default App;
