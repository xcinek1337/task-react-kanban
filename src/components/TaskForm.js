import React, { useState, useReducer, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const styles = {
    border: '5px solid tomato',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    position: 'absolute',
    zIndex: 11,
    width: '400px',
    backgroundColor: '#008299',
    padding: '50px',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
};
const formStyles = {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '300px',
    margin: '0 auto',
};
const stylesForLabel = {
    color: 'tomato',
    fontSize: '24px',
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: '30px',
};
const inputStyle = {
    borderRadius: '5px',
    border: '2px solid tomato',
    padding: '10px 0',
};
const styleButton = {
    backgroundColor: 'tomato',
    borderRadius: '10px',
    border: 'transparent',
    padding: '8px 12px',
    cursor: 'pointer',
    // w css dodac hover
};
function TaskForm({ handleSetTask, closePopup }) {
    const formRef = useRef();

    const fieldsList = [
        { name: 'name', type: 'text', defaultValue: '', validation: { isReq: true } },
        { name: 'describe', type: 'textarea', validation: { isReq: true } },
        { name: 'user', type: 'text', defaultValue: '', validation: { isReq: true } },
    ];

    const init = {};

    fieldsList.forEach(({ name, defaultValue }) => {
        init[name] = defaultValue;
    });

    function reducer(state, action) {
        switch (action.type) {
            case 'change': {
                return { ...state, [action.key]: action.value, idColumn: 1 };
            }
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, init);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                closePopup();
            }
        };
        window.addEventListener('keydown', handleKeyDown);

        const handleClickOutsidePopup = (event) => {
            const darkBackground = document.querySelector('.dark');

            if (darkBackground && event.target === darkBackground) {
                closePopup();
            }
        };
        window.addEventListener('click', handleClickOutsidePopup);
  
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('click', handleClickOutsidePopup);
        };
    }, [closePopup]);

    const renderFieldList = () => {
        return fieldsList.map(({ name, type }) => {
            let tag;

            if (type === 'textarea') {
                tag = (
                  <textarea
                    onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                handleSubmit(e);
                            }
                        }}
                    style={inputStyle}
                    onChange={(e) => dispatch({ type: 'change', key: name, value: e.target.value })}
                    type={type}
                    name={name}
                    id={name}
                    value={state[name]}
                  />
                );
            } else {
                tag = (
                  <input
                    onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                handleSubmit(e);
                            }
                        }}
                    style={inputStyle}
                    onChange={(e) => dispatch({ type: 'change', key: name, value: e.target.value })}
                    type={type}
                    name={name}
                    id={name}
                    value={state[name]}
                  />
                );
            }

            return (
              <div key={name}>
                <label
                  style={stylesForLabel}
                  htmlFor={name}
                >
                  {name}
                  {tag}
                </label>
              </div>
            );
        });
    };

    const renderErros = () => {
        return (
            errors.length > 0 && (
            <ul>
              {errors.map((message) => (
                <li key={message}>{message}</li>
                    ))}
            </ul>
            )
        );
    };
    function validate(data, values) {
        const errors = [];

        data.forEach(({ name, validation }) => {
            const value = values[name];

            if (validation.isReq && value === '') {
                errors.push(`pole ${name} jest wymagane.`);
            }
            if (validation.regex && !validation.regex.test(value)) {
                errors.push(`pole ${name} jest wypelnione nieprawidlowo.`);
            }
        });
        return errors;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate(fieldsList, state);

        setErrors(validationErrors);

        if (validationErrors.length === 0) {
            closePopup();
            handleSetTask(state);
        }
    };

    return (
      <div
        style={styles}
        ref={formRef}
      >
        <h2 style={{ textAlign: 'center' }}>Task</h2>
        <form
          style={formStyles}
          onSubmit={handleSubmit}
        >
          {renderFieldList()}
          <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <button
              style={styleButton}
              onClick={() => closePopup()}
            >
              cancel
            </button>
            <input
              style={styleButton}
              type={'submit'}
            />
          </div>
        </form>
        {renderErros()}
      </div>
    );
}

TaskForm.propTypes = {
    closePopup: PropTypes.any,
    handleSetTask: PropTypes.any,
};
export default TaskForm;
