import React from 'react';
import { useState } from 'react';
import Timer from './Timer';

const UseEffect03 = () => {

  const [showTimer, setShowTimer] = useState(false);
  const [btn, setBtn] = useState('btn btn-info');
  const [msg, setMsg] = useState('Toggle Timer Start!');
  return (
    <div className='container'>
      <button className={btn}
      onClick={()=>{
        setShowTimer(!showTimer);
        setBtn(!showTimer ? 'btn btn-danger' : 'btn btn-info');
        setMsg(!showTimer ? 'Toglle Time Stop' : 'Toggle Time Start!');
      }}
      >{msg}</button>
      <hr />
      {
      showTimer && <Timer />
      }
    </div>
  );
};


export default UseEffect03;