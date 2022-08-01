  import React from 'react';

const Child = ([name, age]) => {
  console.log('자식 컴포넌트 렌더링');
  return (
    <div className='alert alert-success'>
      <h5>
        <i className='fa-solid fa-children'></i>
        <div className='d-flex flex-column'>
          <span>name: {name}</span>
          <span>age : {age} </span>
        </div>
      </h5>
    </div>
  );
};

export default Child;