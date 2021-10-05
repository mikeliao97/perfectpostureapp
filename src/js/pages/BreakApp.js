import React from 'react';
import programs from '../data/Programs'

function BreakApp() {
  
  var currentProgram = programs['ROUNDED_SHOULDERS']
  return (
    <div className='home'>
      <h1>BreakApp</h1>
      <div>
        name is {currentProgram['meta']['name']}
      </div>
   </div>
  );
}

export default BreakApp;