import React, {Component} from 'react';

export default class Jumbotron extends Component {

  constructor(props) {
    super(props);
    this.wrapperWidth = 0;
  }

  componentDidMount() {
    this.wrapperWidth = this.refs.jumbotronWrapper.offsetWidth;
    this.forceUpdate();
  }

  render() {
    return (
      <div ref="jumbotronWrapper" className="jumbotron-wrapper">
        <div className="jumbotron top sliding">
          <div className="bg" style={{width: this.wrapperWidth}} />
        </div>
        <div className="jumbotron bottom sliding">
          <div className="bg" style={{width: this.wrapperWidth}} />
        </div>
      </div>
    );
  }
}
