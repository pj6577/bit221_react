import React from 'react'
import {useRef} from 'react'
import {useState} from 'react'

function UseRef03() {
  //렌더링이 발생하도록 state 설정
  const [renderer, setRenderer] = useState(0);
 
  const countRef = useRef(0);
  let countVar = 0;
 
 
  const increaseCountRef = ()=>{
    countRef.current++;
    console.log('Ref=', countRef.current);
  }
  const increaseCountVar = ()=>{
    countVar++;
    console.log('Var=', countVar);
  }
  const increaseCountRenderer = ()=>{
    setRenderer(renderer + 1);
  }

  return (
    <div className='container'>
      <h3>Ref : {countRef.current}</h3>
      <h3>Var : {countVar}</h3>
      <hr/>
      <button className='btn btn-success' onClick={increaseCountRef}>
        Ref
        <i className="fa-solid fa-arrow-up-from-bracket"></i>
      </button>
      <button className='btn btn-info ' onClick={increaseCountVar}>
        Var
        <i className="fa-solid fa-arrow-up-from-bracket"></i>
      </button>
      <button className='btn btn-danger' onClick={increaseCountRenderer}>
        Rendering
        <i className="fa-solid fa-arrow-rotate-right"></i>
      </button>
    </div>

  )
}

export default UseRef03