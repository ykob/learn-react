import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [0, 10, 20]
    };
  }
  handleClick() {
    const v = [
      this.state.value[0] + 1,
      this.state.value[1] + 2,
      this.state.value[2] + 3
    ];
    this.setState({
      value: v,
    });
  }
  render() {
    return (
      <div>
      <div>value1: {this.state.value[0]}</div>
      <div>value2: {this.state.value[1]}</div>
      <div>value3: {this.state.value[2]}</div>
        <button
          onClick={() => this.handleClick()}
        >
          +
        </button>
      </div>
    )
  }
}

export default App;
