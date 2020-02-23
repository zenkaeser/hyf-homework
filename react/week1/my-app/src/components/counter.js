import React from "react";

export default class CounterImproved extends React.Component {
  // startTimer = null;
  state = { 
    counter: this.props.initialCounter,     //initial value is 0
    isClicked: false,
    isActive: false
  };

  componentDidUpdate(props, state) {
    if (state.isClicked !== this.state.isClicked) {
        console.log(state.counter, state.isClicked);
        this.timerStop(this.startTimer)
        this.setState({counter :  state.counter});
    }
  }

  clickHandler = (event) => {
    this.startTimer = setInterval(this.myTimer, 1000);
    this.setState(function (state, props){
      return { 
        isClicked: !state.isClicked,
        isActive: !state.isActive
      }
    })
    this.props.initialCounter = 0;
    }

  timerStop = () => {
    clearInterval(this.startTimer);
  }
  myTimer = () => {
    this.setState({ 
      counter: this.state.counter + 1,
    })
  }
  
  render() {
    return (
      <div>
          <button onClick={this.clickHandler}>{this.state.isClicked ? "Pause": "Start"}</button>
          Counter: {this.state.counter}
      </div>
    );
  }
}
