import React from 'react';



const Student = ({id, name, isHere, dispatch}) => {
  return (
    <div>
      <span style={
        {textDecoration: isHere ?'underline green' : 'none',
        color: isHere ? 'red' :'white',
        cursor : 'pointer'
      }
      } 
        onClick={()=>{
          dispatch({type:'check-student', payload:{id}})
        }}
      >{`${name} (${id})`}</span>
      <button className='btn btn-outline-danger'
      onClick={()=>{
        dispatch({type:'del-student', payload:{id}});
      }}
      >삭제</button>
    </div>
  );
};

export default Student;