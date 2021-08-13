import React from 'react';

function BreakApp() {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());


  return (
    <div className='home'>
      <h1>BreakApp</h1>
   </div>
  );
}

export default BreakApp;