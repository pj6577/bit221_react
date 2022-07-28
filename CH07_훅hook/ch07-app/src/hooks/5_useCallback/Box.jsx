import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Box = (props) => {
  const[style, setSyle] = useState([]); //빈 오브젝트로 초기화
  useEffect(()=>{
    setSyle(props.createBoxStyle);
  },[props.createBoxStyle]);
  return (
    <div style={style}>
      
    </div>
  );
}; 

export default Box;