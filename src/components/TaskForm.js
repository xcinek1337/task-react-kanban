import React, { useState, useReducer, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import { validate, getInitFormValues } from '../helper';

function TaskForm({ handleSetTask, closePopup }) {
    const formRef = useRef();

    const { init, fieldsList } = getInitFormValues();

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

    const renderFieldList = () => {
      return fieldsList.map(({ name, type }) => {
          const Component = type;

          const tag = (
            <Component
              onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                          handleSubmit(e);
                      }
                  }}
              className={'form__input'}
              onChange={(e) => dispatch({ type: 'change', key: name, value: e.target.value })}
              type={type}
              name={name}
              id={name}
              value={state[name]}
            />
          );
          
          return (
            <div key={name}>
              <label
                className={'form__label'}
                htmlFor={name}
              >
                {name}*{tag}
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
                <li
                  className={'form__error-msg'}
                  key={message}
                >
                  {message}
                </li>
                    ))}
            </ul>
            )
        );
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                closePopup();
            }
        };
        window.addEventListener('keydown', handleKeyDown);

        const handleClickOutsidePopup = (event) => {
            const darkBackground = document.querySelector('.dark-background');

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
        className={'popup'}
        ref={formRef}
      >
        <h2 className={'popup__header'}>Task</h2>
        <form
          className={'popup__form form'}
          onSubmit={handleSubmit}
        >
          {renderFieldList()}
          <div className={'form__div-btns'}>
            <button
              className={'form__btn'}
              onClick={() => closePopup()}
            >
              Cancel
            </button>
            <input
              className={'form__btn'}
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
