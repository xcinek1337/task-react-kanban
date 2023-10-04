import React from 'react';

function Navbar() {
    return (
      <nav style={{display: 'flex', justifyContent: 'space-around' , alignItems: 'center', borderBottom: '1px solid black', marginBottom: '50px'}}>
        <span>&#x235F;</span>
        <h1>Kanban</h1>
        <span style={{color: '#A6A6A6'}} > Add Task  &#x2795;</span>
      </nav>
    );
}
export default Navbar;
