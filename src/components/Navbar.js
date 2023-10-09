import React from 'react';
import PropTypes from 'prop-types';

function Navbar({ openPopup }) {
    return (
      <nav className={"navbar"}>
        <span></span>
        <h1 className={'navbar__logo'}>Kanban</h1>
        <button
          className={"navbar__btn"}
          onClick={openPopup}
        >
          Add Task <span className={'navbar__plus'}>+</span>
        </button>
      </nav>
    );
}

Navbar.propTypes = {
    openPopup: PropTypes.any,
};

export default Navbar;
