import React from 'react';

export class VisibilityApp extends React.Component {
  render () {
    const title = 'Visibility Toggle';

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
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false
    };
  }

  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      };
    });
  }

  render () {
    return (
      <div>
        <button onClick={this.handleToggleVisibility}> {this.state.visibility ? 'Hide details':'Show details'} </button>
        {this.state.visibility && (
          <div>
            <p>Hey. These are some details you can now see!</p>
          </div>
          )}
      </div>
    );
  }
}
