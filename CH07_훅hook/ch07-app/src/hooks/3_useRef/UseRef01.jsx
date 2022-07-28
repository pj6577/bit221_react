import React, {useEffect, useRef} from 'react'

/**
 * useRef()
 * 참조(Reference)를 사용하기 위한 훅
 * 반환값: 레퍼런스 객체 (ref object(자바스크립트에서 키: 밸류의 자료형))
 * const ref = useRef(value) == {current: value}
 * ref.current 하면 값 사용 가능
 * 
 * ref 객체는 컴포넌트의 전 생애주기 전체에 걸쳐서 유지 !!
 * 컴포넌트가 재랜더링되더라도 초기화되지 않는다. 
 * 
 * 어디에 사용 ???
 * 1. DOM 요소 접근 시 사용(document.querySelect(#, . 등)) ! 이 기능을 ref가 할 수 있음
 * 2. 저장공간으로 사용 (화면과는 상관없지만 로직에서 필요 state랑은 다름)
 *  
*/

function UseRef01() {
  
  //unmount까지 살아있음
  const inputRef = useRef(); // current라는 key를 가진 value {current: value}
  const imgRef = useRef(); //img태그에 대한 참조를 할당

  useEffect(()=> {
    inputRef.current.focus();
  }, []);

  const onButtonClick = ()=>{
    alert(`환영합니다 ${inputRef.current.value}`)
    imgRef.current.style.visibility = 'visible';
  }

  return (
    <div className='container'>
      <img ref={imgRef} src='logo192.png' alt='' style={{width:'100px', marginBottom: '100px', visibility:'hidden'}} />
      <div className='d-flex'>
        <input ref={inputRef} type={'text'} className='form-control w-auto' placeholder='usename'/>
        <button className='btn btn-info ml-1'
          onClick={onButtonClick}
        >로그인</button>
      </div>
    </div>
  )
}

export default UseRef01