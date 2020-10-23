import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Games from './components/Games';
import Game from './components/Game/Game';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <Router>
        <>
          <NavBar/>
          <Route exact path="/" component={Games} />
          <Route exact path="/game" component={Game} />
          <Route exact path="/game/:id" component={Game} />
        </>
      </Router>
    </div>
  );
}

export default App;
