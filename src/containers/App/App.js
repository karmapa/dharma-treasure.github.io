import React, {Component, PropTypes} from 'react';
import {MenuButton, Jumbotron} from '../../components';
import {connect} from 'react-redux';
import {setMenuStatus} from '../../modules/app';

@connect(state => ({
  isMenuOpened: state.app.get('isMenuOpened')
}), {setMenuStatus})
export default class App extends Component {

  static propTypes = {
    isMenuOpened: PropTypes.bool.isRequired,
    setMenuStatus: PropTypes.func.isRequired
  };

  handleMenuButtonClick = () => this.props.setMenuStatus(! this.props.isMenuOpened);

  render() {
    return (
      <div className="home">
        <header>
          <div className="header">
            <h1>Dharma Treasure</h1>
            <MenuButton opened={this.props.isMenuOpened} onClick={this.handleMenuButtonClick} />
          </div>
        </header>
        <Jumbotron />
      </div>
    );
  }
}
