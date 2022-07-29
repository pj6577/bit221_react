import React from 'react';
import { useReducer } from 'react';
import { useState } from 'react';
import Student from './Student';

const reducer = (state, action) => {
  switch (action.type) {
    case 'add-student':
      const name = action.payload.name;
      const newStudent = {
        id: Date.now(),
        name: name,
        isHere: false,
      };
      return {
        count: state.count + 1,
        student: [...state.student, newStudent],
      }
    case 'del-student':
      return {
        count: state.count - 1,
        student: state.student.filter(student => student.id !== action.payload.id)
      }
    case 'check-student':
      return {
        count: state.count,
        student: state.student.map(student => {
          if (student.id === action.payload.id) {
            return { ...student, isHere: !student.isHere }
          } else {
            return student;
          }
        })
      }
    default:
      return state;
  }
}
const intitialState = {
  count: 1,
  student: [
    {
      id: Date.now(),
      name: 'Tome',
      isHere: false,
    },
  ],
}
const UseReducer03 = () => {
  const [name, setName] = useState('');
  const [studentsInfo, dispatch] = useReducer(reducer, intitialState);
  return (
    <div className='container'>
      <div className='alert alert-info'>
        <div>
          <i className='fa-solid fa-book'></i>
          &nbsp; 출석부
        </div>
        <hr />
        <p> 총 학생 수 {studentsInfo.count} 명</p>
        <div>
          <input className='form-control'
            placeholder='이름을 입력해주세요'
            spellCheck='false'
            onChange={(e) => { setName(e.target.value) }}
          />
          <button className='btn btn-success mt-3'
            onClick={(e) => {
              if (name === '') {
                alert('이름을 적어주세요');
                return;
              }
              dispatch({ type: 'add-student', payload: { name } });
            }}
          >추가</button>
        </div>
      </div>
      {
        studentsInfo.student.map(student => {
          return <Student
            key={student.id}
            name={student.name}
            id={student.id}
            isHere={student.isHere}
            dispatch={dispatch}
          />
        })
      }
    </div>
  );
};

export default UseReducer03;