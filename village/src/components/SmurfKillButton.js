import React from 'react';

const SmurfKillButton = props => {
  return (
    <button onClick={(event,id) => props.goldenizeSmurf(event,props.id)}>{props.name}</button>
  )
}
//

export default SmurfKillButton;
