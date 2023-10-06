import React from 'react';
import PropTypes from 'prop-types';

function Navbar({ openPopup }) {
    return (
      <nav
        style={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                borderBottom: '1px solid black',
                marginBottom: '50px',
            }}
      >
        <span>&#x235F;</span>
        <h1>Kanban</h1>
        <span
          onClick={openPopup}
          style={{ color: '#A6A6A6', cursor: 'pointer' }}
        >
          Add Task &#x2795;
        </span>
      </nav>
    );
}

Navbar.propTypes = {
    openPopup: PropTypes.any,
};

export default Navbar;
