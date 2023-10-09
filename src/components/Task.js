/* eslint-disable react/prop-types */
import React,{useContext} from 'react';
import PropTypes from 'prop-types';

import Buttons from './Buttons';

import { Kanban } from './Board';

export const ButtonContext = React.createContext();

function Task({ tasks }) {
    const { deleteDoneTask } = useContext(Kanban);

    const task = tasks.map((task) => {
        const contextValueBtns = {
            taskId: task.id,
            idColumn: task.idColumn,
        };

        return (
          <li
            className={'column__task task'}
            key={task.id}
          >
            <button
              className={"task__delete-btn"}
              onClick={() => deleteDoneTask(task.id)}
            >x
            </button>
            <h3 className={"task__header"} >{task.name}</h3>
            <p className={"task__describe"} >{task.describe}</p>
            <p className={"task__user"} >{task.user}</p>
            <ButtonContext.Provider value={contextValueBtns}>
              <Buttons />
            </ButtonContext.Provider>
          </li>
        );
    });

    return <>{task}</>;
}

Task.propTypes = {
  tasks: PropTypes.array.isRequired,
};

export default Task;
