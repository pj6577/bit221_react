import React, { useState } from 'react';
import { useReducer } from 'react';

const ACTION_TYPE ={
  DEPOSIT :'deposit',
  WITHDRAW :'withdraw'
}

const reducer = (state, action) =>{
  console.log(state, action);
  switch(action.type){
    case'예금':
      return state + action.payload;
      case '출금': if(state>0)
        return state - action.payload;
        else{
          alert("잔액부족");
        }
      default :
        return state;
  }
}

const UseReducer02 = () => {
  const [money, setMoney] = useState(0);
  const [account, dispatch]= useReducer(reducer, 0); //[state, dispatch함수]
  return (
    <div>
      <h6>useReducer 은행에 오신걸 환영합ㄴ디</h6>
      <h2>잔고 : {account} 원</h2>
      <div>
        <input className='form-control mb-2' 
        type={'number'}
        value={money}
        step='1000'
        onChange={(e)=>{setMoney(parseInt(e.target.value))}}
        />
        <button className='btn btn-info'
          onClick={()=>{dispatch({type: ACTION_TYPE.DEPOSIT, payload:money})}}
        >예금</button>
        <button className='btn btn-danger'
        onClick={()=>{dispatch({type:ACTION_TYPE.WITHDRAW, payload:money})}}
        >출금</button>
      </div>
    </div>
  );
};

export default UseReducer02;