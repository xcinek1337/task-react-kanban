import React, { useContext } from 'react';


function Task(props) {
  const { task } = props 
    return (
        <li>
            <h5>{task.name}</h5>
            <p>{task.describe}</p>
            <button>&#8594;</button>
        </li>
    );
}

export default Task;
