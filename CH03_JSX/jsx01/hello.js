class Hello extends React.Component {

  render(){
    return <h1>Hello, {this.props.nickname}</h1>
  }
}
ReactDOM.render(
  //컴포넌트 사용
<Hello nickname="박재현" />,
  document.getElementById('root')
  
);

