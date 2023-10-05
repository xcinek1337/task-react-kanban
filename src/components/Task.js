/* eslint-disable react/prop-types */
import React,{useContext} from 'react';
import PropTypes from 'prop-types';

import Buttons from './Buttons';
import { ColumnsContext } from './Board';

export const ButtonContext = React.createContext();

function Task({ tasks }) {
  const { ColumnsPattern } = useContext(ColumnsContext);

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
            <button style={{visibility: task.idColumn === ColumnsPattern.length ? 'visible' : 'hidden'}}>x</button>
            <h3>{task.name}</h3>
            <span>{task.describe}</span>
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
