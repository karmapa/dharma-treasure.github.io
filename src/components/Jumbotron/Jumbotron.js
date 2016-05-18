import React, {Component} from 'react';
import {debounce} from 'lodash';

export default class Jumbotron extends Component {

  constructor(props) {
    super(props);
    this.wrapperWidth = 0;
  }

  componentDidMount() {
    this.wrapperWidth = this.refs.jumbotronWrapper.offsetWidth;
    this.forceUpdate();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = debounce(() => {
    this.wrapperWidth = this.refs.jumbotronWrapper.offsetWidth;
    this.forceUpdate();
  }, 300);

  render() {
    return (
      <div ref="jumbotronWrapper" className="jumbotron-wrapper">
        <div className="jumbotron top sliding">
          <div className="bg" style={{width: this.wrapperWidth}} />
        </div>
        <div className="jumbotron bottom sliding">
          <div className="bg" style={{width: this.wrapperWidth}} />
        </div>
        <div className="overlay" />
      </div>
    );
  }
}
