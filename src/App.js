import React, { Component } from 'react';
import HaikuPractice from '@haiku/shunwitter-haikupractice/react';
import './App.css';

class App extends Component {
  ref = null;

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    console.log(this.ref);
  }

  handleClick() {
    console.log('fire');
    this.ref.haiku.getDefaultTimeline().gotoAndPlay(0)
  }

  render() {
    return (
      <div className="App">
        <h1 style={{ fontWeight: 300, marginTop: 100 }}>Haiku Programmatic Animation Example</h1>
        <p style={{ textAlign: 'center', fontWeight: 300 }}>Click The HEART!</p>
        <div style={{ margin: '0 auto', width: 300, cursor: 'pointer' }}>
          <HaikuPractice
            sizing="cover"
            ref={(ref) => { this.ref = ref; }}
            onClick={this.handleClick}
          />
        </div>
      </div>
    );
  }
}

export default App;
