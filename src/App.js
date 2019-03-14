import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

//styling
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//Components
import Homepage from './components/Layout/Homepage';
import SearchBar from './components/search/SearchBar';
import Pokemon from './components/PokemonDB/Pokemon';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App" style={{ background: "#f44242" }}>
          <div className="container">
          <SearchBar />
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;