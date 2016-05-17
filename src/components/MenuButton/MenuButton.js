import React, {Component, PropTypes} from 'react';

export default class MenuButton extends Component {

  static propTypes = {
    opened: PropTypes.bool.isRequired
  };

  render() {
    return (
      <button className="button-menu">
        <div className="button">
          <div className="bar bar1"></div>
          <div className="bar bar2"></div>
          <div className="bar bar3"></div>
        </div>
        <span className="label">Menu</span>
      </button>
    );
  }
}
