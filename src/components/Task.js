/* eslint-disable react/prop-types */
import React from 'react';


function Task(props) {
  const { task } = props 
    return (
        <li style={{listStyle: 'none'}}>
            <h5>{task.name}</h5>
            <p>{task.describe}</p>
            <button>&#8594;</button>
        </li>
    );
}

export default Task;
