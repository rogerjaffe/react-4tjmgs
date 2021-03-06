import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing now to see some magic happen with a change :)
        </p>
        <p>And another line</p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
