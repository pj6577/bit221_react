import React, { useState } from 'react';
import { useCallback } from 'react';
import  Box  from './Box'

const UseCallback03 = () => {
  const [size, setSize] = useState(100);
  const [isDark, setDark] = useState('false');
  // const createBoxStyle = ()=>{
  //   return{
  //     backgroundColor:'yellowgreen',
  //     width : `${size}px`,
  //     height : `${size}px`
  //   }
  // }
  const createBoxStyle = useCallback(()=>{
    return{
    backgroundColor:'yellowgreen',
    width : `${size}px`,
    height : `${size}px`
  }
},[size]);

  return (
    <div style={{backgroundColor: isDark ?'#333' : 'white'}}>
      <button className='btn btn-info mb-1'
      onClick={()=>{setDark(!isDark)}}
      >Change theme</button>
      <input className='form-control' type={'number'} value={size} 
        onChange={(e)=>setSize(e.target.value)}
      />

      <br />

      <Box createBoxStyle={createBoxStyle} />
    </div>

  )
}

export default UseCallback03;