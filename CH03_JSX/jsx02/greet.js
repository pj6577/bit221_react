// JSX

/* 
  1. 태그는 무조건 닫혀야 한다
*/
<input type='text' />

/* 
2. 두개 이상의 엘리먼트틑 무조건 하나의 엘리먼트로 감싸져아한다.
*/
class App2 extends React.Compoent {
  render() {
    return (
      <>
        <div>div</div>
        <button>button</button>
        <h3>h3</h3>
      </>
    );
  }
}
/* 
3. JSX 내부에서 변수를 사용하려면 코드를 { } 로 감싸면 된다.
*/

class App3 extends React.Compoent {
  redner() {
    const title = "100분 토론";
    return (
      <>
        <h1> {title}</h1>
      </>
    );
  };
}

/**
 * 4. {js감싸기}  조건문 () 사용 불가능
 * : 삼항 연산자 
 */
class App4 extends React.Compoent {
  render() {
    let flag =true;
    return (
      <div>
        {
          flag ? <p>안녕하세요</p> : <p>누구세요?</p>
        }
      </div>
    );
  }
};


/**
 * 5. 카멜케이스 표기ㅓㅂ
 */
class App5 extends React.Compoent{
  render(){
    return(
      <div className="app5">
        <h1>내용</h1>
      </div>
    );
  }
}