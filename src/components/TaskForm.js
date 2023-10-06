import React, { useState } from 'react';
import PropTypes from 'prop-types';

const styles = {
    border: '1px solid red',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    position: 'absolute',
    zIndex: 11,
    width: '400px',
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
};
const formStyles = {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '300px',
    margin: '0 auto',
};

function TaskForm({ closePopup }) {
    const [taskData, setTaskData] = useState({
        task: '',
        name: '',
        text: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTaskData({ ...taskData, [name]: value });
    };

    const clearForm = () => {
        setTaskData({
            task: '',
            name: '',
            text: '',
        });
    };

    const submitForm = (e) => {
        e.preventDefault();

        const newTask = {
            name: taskData.task,
            owner: taskData.name,
            describe: taskData.text,
        };
        clearForm();
       
        closePopup();
    };

    return (
      <div style={styles}>
        <h2 style={{ textAlign: 'center' }}>Create Task</h2>
        <form
          action={''}
          onSubmit={submitForm}
          style={formStyles}
        >
          <div>
            <label htmlFor={'task'}>
              nazwa taska
              <input
                type={'text'}
                name={'task'}
                value={taskData.task}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div>
            <label htmlFor={'name'}>
              owner
              <input
                type={'text'}
                name={'name'}
                value={taskData.name}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div>
            <label htmlFor={'text'}>
              opis
              <textarea
                type={'text'}
                name={'text'}
                value={taskData.text}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <button 
              type={"button"} 
              onClick={()=> closePopup()}
            >cancel
            </button>
            <button type={'submit'}>submit</button>
          </div>
        </form>
      </div>
    );
}

TaskForm.propTypes = {
    closePopup: PropTypes.any,
};
export default TaskForm;
