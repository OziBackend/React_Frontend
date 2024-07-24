import React from 'react';
import '../App.css';

function Module() {
  return (
    <div>
        {console.log('check')}
      <div className="card-container" style={{ display: 'flex' }}>
        <div className="card">
          <img src="default-image.jpg" alt="Default" />
          <p>Name 1</p>
        </div>
        <div className="card">
          <img src="default-image.jpg" alt="Default" />
          <p>Name 2</p>
        </div>
      </div>
    </div>
  );
}

export default Module;