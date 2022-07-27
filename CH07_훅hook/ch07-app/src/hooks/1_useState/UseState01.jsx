// rafce

import React, { useState } from 'react'

const UseState01 = () => {
  const [time, setTime] = useState(1);  //[state, serState]
  const handleClick = () => {
    if(time >=24 ){
      setTime(1);
    }else {
      setTime(time + 1) ;
    }
    
    
  }


  console.log("렌더링 . . .")
  return (
    <div className='container mt-5' style={{ color: 'white', background: 'crimson' }}>
      <span> 현재 시각 {time}시</span>
      <button className='btn btn-danger'
        onClick={handleClick}
      >Update</button>
    </div>
  )
}

export default UseState01

