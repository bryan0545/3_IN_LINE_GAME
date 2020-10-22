import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Games from './components/Games';
import Game from './components/Game/Game'
function App() {
  return (
    <div className="App">
      <Router>
        <>
          <Route exact path="/games" component={Games} />
          <Route exact path="/game" component={Game} />
          <Route exact path="/game/:id" component={Game} />
        </>
      </Router>
    </div>
  );
}

export default App;
