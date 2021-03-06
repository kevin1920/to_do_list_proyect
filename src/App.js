import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Login from './components/login'
import Projects from './pages/projects'
import Board from './pages/board'



function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Login}/>
      <Route exact path="/projects" component={Projects}/>
      <Route exact path="/board" component={Board}/>
    </BrowserRouter>
  );
}

export default App;
