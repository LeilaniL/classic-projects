import React from 'react';
import { Switch, Route, BrowserRouter, Link } from 'react-router-dom';
import './App.css';
import PigLatin from './components/PigLatin.js';
import RomanNum from './components/RomanNum';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/pig-latin" component={PigLatin} />
            <Route path="/roman-num" component={RomanNum} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
