import React from 'react';
import '../App.css';

function Module({projects}) {
  return (
    <div className="center-container">
        {console.log('check')}
      <div className="card-container">
        {
          projects.map((project, index) => (
            <div className="card">
              <img src="https://play-lh.googleusercontent.com/N4cbqtIriwio5uACW0XVXMn-CzgbLBiXG5FFLIx630zhmP5UVF1wOAeY0GXV9kRHpw" alt="Default" className="card-image" style={{ width: '12vw', height: 'auto' }} />
              <u><i><p className="card-text" style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif' }}>{project}</p></i></u>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Module;