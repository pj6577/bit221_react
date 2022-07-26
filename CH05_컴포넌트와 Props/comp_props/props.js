/**
 * 컴포넌트 입력(Props)
 * : '속성'
 * 읽기 전용
 * 
 * 자바스크립트 객체 { } 
 */
function App(props) {
  return(                                 //숫자가 올 때도 { } 써주기 
    <Profile name = 'Kari' intro = '안녕' hit = {100}/>
  );
}

function Profile({name, intro, hit}) {
  return(
    <>
      <h2>{name}의 블로그 입니다.</h2>
      <p>{intro}</p>
      <hr/>
      <span>{hit}</span>
    </>
  );
}

