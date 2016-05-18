import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

export default class MenuButton extends Component {

  static propTypes = {
    onClick: PropTypes.func,
    opened: PropTypes.bool.isRequired
  };

  render() {

    const className = classNames({
      'button-menu': true,
      'opened': this.props.opened
    });

    return (
      <button className={className} onClick={this.props.onClick}>
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
