import React from 'react';
import { useState } from 'react';

const styles = {
  container:{
    padding:100,
    display: 'flex',
    flexDirection: 'center'
  },
  btn : {
    padding : 20,
  },
}

const UseState03 = () => {
  const [time, setTime] = useState(0);
  const ClickUp =()=>{
    setTime(time +1);
  }
  return (
    <div className='container' style={styles.container}>
      You Clicked {time} times

      <button
      onClick={ClickUp}
      >버튼</button>
    </div>
  );
};

export default UseState03;