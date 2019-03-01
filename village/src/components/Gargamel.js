import React, { Component } from 'react';
import axios from 'axios';
import SmurfKillButton from './SmurfKillButton';

class Gargamel extends Component {

  goldenizeSmurf = (event,id) => {
    axios.delete(`http://localhost:3333/smurfs/${id}`)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error)
      })

  };

  render() {
  return (
    <div className="Gargamel">
      <h1>Gargamel's Lab</h1>
      <p>Gargamel leans forward, leering evilly. "I can finally get rid of those blueberry rats! Which Smurf have you brought to me?"</p>
      <ul>
        {this.props.smurfs.map(smurf => {
          return (
            <SmurfKillButton name={smurf.name} key={smurf.id} id={smurf.id} goldenizeSmurf={this.goldenizeSmurf} />
          );
        })}
      </ul>
    </div>
  );
}
}

export default Gargamel;
