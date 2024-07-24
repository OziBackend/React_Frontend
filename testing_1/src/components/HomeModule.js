import React from 'react';
import '../App.css';

function Module() {
  return (
    <div>
        {console.log('check')}
      <div className="card">
        <h2>Card 1</h2>
        <p>Name 1</p>
      </div>
      <div className="card">
        <h2>Card 2</h2>
        <p>Name 2</p>
      </div>
    </div>
  );
}

export default Module;