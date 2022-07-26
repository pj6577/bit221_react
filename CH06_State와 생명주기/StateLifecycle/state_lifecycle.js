/**
 * 스테이트(state)?
 * 렌더링과 직접적인 관련
 * => 리액트 컴포넌트의 변경 가능한 데이터(개발자 정의)
 * => 실체: 자바스크립트 객체 {key: value, , , }
 * => state 변경 시 컴포넌트가 재렌더링 된다. (= 화면 갱신)
 * 
 * 클래스형 컴포넌트: 생성자에서 (스테이트)세팅
 * 함수형 컴포넌트: 리액트 Hook을 사용하여 세팅
 */

class LikeButton extends React.Component{
  constructor(props) {
    super(props);
    // 생성자에서 모든 state를 한 번에 정의
    this.state = {liked: false}
  }

  render() {
    return(
      <div>
        {
          this.setState({liked:true})
        }
      </div>
    );
  }
}

/**
 * 생명주기(LifeCycle)
 * 
 *   Mounting     ----->      Updating         ----->  Unmounting
 * (컴포넌트 생성)          (컴포넌트 수정)          (컴포넌트 소멸)
 *  
 *  componentDidMount()   componentDidUpdate()      componentWillUnmount()
 *
 * 
 */