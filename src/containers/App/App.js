import React, {Component} from 'react';
import {MenuButton} from '../../components';

export default class App extends Component {

  render() {
    return (
      <div className="home">
        <div className="jumbotron"></div>
        <header>
          <div className="header">
            <h1>Dharma Treasure</h1>
            <MenuButton />
          </div>
        </header>
      </div>
    );
  }
}
