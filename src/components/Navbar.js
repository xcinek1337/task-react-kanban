import React, { useContext } from 'react';

import { FuncHandlerContext } from './Board';
function Navbar() {
    const { testCreateTask } = useContext(FuncHandlerContext);

    const handleCreateTask = () => {
        testCreateTask();
    };

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
          onClick={handleCreateTask}
          style={{ color: '#A6A6A6', cursor: 'pointer' }}
        >
          Add Task &#x2795;
        </span>
      </nav>
    );
}
export default Navbar;
