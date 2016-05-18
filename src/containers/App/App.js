import React, {Component, PropTypes} from 'react';
import {Menu, MenuButton, Jumbotron} from '../../components';
import {connect} from 'react-redux';
import {setMenuStatus} from '../../modules/app';
import classNames from 'classnames';

@connect(state => ({
  isMenuOpened: state.app.get('isMenuOpened')
}), {setMenuStatus})
export default class App extends Component {

  static propTypes = {
    isMenuOpened: PropTypes.bool.isRequired,
    setMenuStatus: PropTypes.func.isRequired
  };

  handleMenuButtonClick = () => this.props.setMenuStatus(! this.props.isMenuOpened);

  renderContent() {
    if (this.props.isMenuOpened) {
      return <Menu />;
    }
    return <Jumbotron />;
  }

  render() {
    const {isMenuOpened} = this.props;
    const headingClassName = classNames({
      hidden: isMenuOpened
    });
    return (
      <div className="home">
        <header>
          <div className="header">
            <h1 className={headingClassName}>Dharma Treasure</h1>
            <MenuButton opened={isMenuOpened} onClick={this.handleMenuButtonClick} />
          </div>
        </header>
        {this.renderContent()}
      </div>
    );
  }
}
