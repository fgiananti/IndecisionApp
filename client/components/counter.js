import React from 'react';

export class CounterApp extends React.Component {
  render () {
    const title = 'Counter';
    return (
      <div>
        <Header title={title} />
        <Action />
      </div>
    );
  }
}

class Header extends React.Component {
  render () {
    return (
      <div>
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

class Action extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleResetOne = this.handleResetOne.bind(this);
    this.state = {
      count: 0
    };
  }

  handleAddOne () {
    this.setState((prevState) => {
      return {
        count: prevState.count +1
      };
    });
  }
  handleMinusOne () {
    this.setState((prevState) => {
      return {
        count: prevState.count -1
      };
    });
  }
  handleResetOne () {
    this.setState(() => {
      return {
        count: 0
      };
    });
  }
  render () {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleResetOne}>reset</button>
      </div>
    );
  }
}
