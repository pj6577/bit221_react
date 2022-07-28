import React, { useState } from 'react';

const UseReducer02 = () => {
  const [money, setMoney] = useState(0);
  return (
    <div>
      <h6>useReducer 은행에 오신걸 환영합ㄴ디</h6>

      <h2>잔고 : 100,000,000</h2>
      <div>
        <imput className='form-control mb-2' 
        type={'number'}
        step='1000'
        />
        <button className='btn btn-info'>예금</button>
        <button className='btn btn-danger'>출금</button>
      </div>
    </div>
  );
};

export default UseReducer02;