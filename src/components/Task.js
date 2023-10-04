/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

function Task({ tasks }) {
    const task = tasks.map((task) => {
        return (
          <li
            key={task.id}
            style={{ listStyle: 'none', border: '1px solid tomato' }}
          >
            <h3>{task.name}</h3>
            <span>{task.describe}</span>
          </li>
        );
    });
    return <div style={{textAlign:'center'}}>{task}</div>;
}

Task.propTypes = {
  tasks: PropTypes.array.isRequired,
};

export default Task;
