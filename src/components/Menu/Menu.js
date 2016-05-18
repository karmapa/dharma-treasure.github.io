import React, {Component} from 'react';

export default class Menu extends Component {

  render() {
    return (
      <div className="menu">
        <ul>
          <li>
            <a href="">
              <span className="number">01</span>
              <span className="text">Adarsha</span>
              <span className="text-ex">Adarsha</span>
            </a>
          </li>
          <li>
            <a href="">
              <span className="number">02</span>
              <span className="text">Karmapa Digital Tool KIT</span>
              <span className="text-ex">Karmapa Digital Tool KIT</span>
            </a>
          </li>
          <li>
            <a href="">
              <span className="number">03</span>
              <span className="text">Dharma e-Book download</span>
              <span className="text-ex">Dharma e-Book download</span>
            </a>
          </li>
          <li>
            <a href="">
              <span className="number">04</span>
              <span className="text">About Us</span>
              <span className="text-ex">About Us</span>
            </a>
          </li>
        </ul>
        <div className="line-random line1" />
        <div className="line-random line2" />
        <div className="line-random line3" />
        <div className="line-random line4" />
        <div className="line-random line5" />
        <div className="line-random line6" />
      </div>
    );
  }
}
