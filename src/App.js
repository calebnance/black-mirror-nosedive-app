import React, { Component } from 'react';

import star from './svgs/star.svg';
import profileImg from './images/user1.jpg';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-username">
            <span>&#123;Username&#125;</span>
            would you like to
          </div>
          <div className="App-user-img">
            <img src={profileImg} alt="user image" />
          </div>
          <div className="App-user-to-rate">
            Rate <span>&#123;Username&#125;</span>
          </div>
        </header>
        <div className="Rating-container">
          <img src={star} alt="rating 1" />
          <img src={star} alt="rating 2" />
          <img src={star} alt="rating 3" />
          <img src={star} alt="rating 4" />
          <img src={star} alt="rating 5" />
        </div>
      </div>
    );
  }
}

export default App;
