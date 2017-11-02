import React, { Component } from 'react';
import Intro from './Intro'
import Contact from './Contact'
import '../assets/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="flex-divider">
          <div className="left-side">
              <p>hello world</p>
            <Intro />
            <Contact />
          </div>
          <div className="right-side">
            <p>hello world</p>
            <div className="project-list"></div>
            <div className="about"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
