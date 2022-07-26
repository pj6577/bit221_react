//rcc 리액트 클래스 컴포넌트
import React, { Component } from 'react'

export default class Clock extends Component {

  constructor(props){
    super(props);
    this.state = {date: new Date};
  }

  componentDidMount(){
    this.timerId = setInterval(()=> {
      this.tick()
    }, 1000);
  }

  componentWillUnmount(){
    clearInterval(this.timerId);
  }

  tick() {
    this.setState(
      {
        date : new Date()
      }
    );
  }

  render() {
    return (
      <div>
        <h1>Hello Kari ! ! </h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}

