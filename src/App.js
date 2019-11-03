import React from 'react';
import { Switch, Route, BrowserRouter, Link } from 'react-router-dom';
import './App.css';
import UserInput from './components/UserInput.js';
import PigLatin from './components/PigLatin.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={UserInput} />
            <Route path="/pig-latin" component={PigLatin} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
