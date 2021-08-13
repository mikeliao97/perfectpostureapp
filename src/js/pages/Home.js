import React from 'react';
import { useHistory } from "react-router-dom";

function Home() {
  console.log('window.', window.location.href);
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());
  console.log('myParam', params);


  return (
    <div className='home'>
      <h1>Home</h1>
   </div>
  );
}

export default Home;