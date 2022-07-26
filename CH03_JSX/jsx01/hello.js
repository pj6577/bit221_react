// 일반 클래스가 아닌 컴포넌트
class Hello extends React.Component {
  render() {
    return <h1>Hello, {this.props.nickname}</h1>
  }
}

ReactDOM.render(
  // 컴포넌트 사용
  <Hello nickname = '붕어빵' />,
  document.getElementById('root')
);
