/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import Buttons from './Buttons';

export const ButtonContext = React.createContext();

function Task({ tasks }) {
    const task = tasks.map((task) => {
        const contextValueBtns={
          taskId: task.id,
          idColumn: task.idColumn
        }
      
        return (
          <li
            key={task.id}
            style={{ display: 'flex', flexDirection: 'column', listStyle: 'none', border: '1px solid tomato' }}
          >
            {/* tę trójkę przydaloby sie zastapic columns.lenght */}
            <button style={{visibility: task.idColumn === 3 ? 'visible' : 'hidden'}}>x</button>
            <h3>{task.name}</h3>
            <span>{task.describe}</span>
            {/* prosze o ocene czy zasotowanie tutaj probidera jest ok. Omijam kopomnent Buttons i przekazywanie tam podowjnie propsow */}
            <ButtonContext.Provider value={contextValueBtns}>
              <Buttons />
            </ButtonContext.Provider>
          </li>
        );
    });
    return <div style={{ textAlign: 'center' }}>{task}</div>;
}

Task.propTypes = {
  tasks: PropTypes.array.isRequired,
};

export default Task;
