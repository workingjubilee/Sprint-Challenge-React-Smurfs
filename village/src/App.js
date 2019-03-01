import React, { Component } from 'react';
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Gargamel from './components/Gargamel';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3333/smurfs')
      .then(response => {
        console.log(response);
        this.setState({
          smurfs: response.data
        })
      })
      .catch(error => console.log(error))
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <nav>
          <NavLink exact to="/" activeClassName="">The Village</NavLink>
          <NavLink to="/smurf-form" activeClassName="">Add Smurf?</NavLink>
          <NavLink to="/gargamel" activeClassName="">Gargamel's Lab</NavLink>
        </nav>
        <Route exact path="/" render={props => (
          <Smurfs smurfs={this.state.smurfs} />
        )} />
        <Route path="/smurf-form" component={SmurfForm} />
        <Route path="/gargamel" render={props => (<Gargamel smurfs={this.state.smurfs} />)} />
      </div>
    );
  }
}





export default App;
