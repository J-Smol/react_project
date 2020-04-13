import React from 'react';

const Button = props => {
  return (
    <div>
        <button onClick={props.changeBlock}>{props.title}</button>
    </div>
  )  
};

export default Button;