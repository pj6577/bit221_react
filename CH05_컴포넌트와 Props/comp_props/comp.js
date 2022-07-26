/**
 * 컴포넌트 (함수형, 클래스형)
 * 
 * 함수 컴포넌트
 */
//함수형도 클래스처럼 표기
function Welcome1(props) {
  return <h1>Hello, {props.name} </h1>
}

// 클래스 컴포넌트
class Welcome2 extends React.Component{
  render() {
    // 클래스형에는 내부에 props가 있어서 this 사용
    return <h1>Hello, {this.props.name} </h1>
  }
}

<Welcome1 name="카리"></Welcome1>
