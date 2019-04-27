/***** REACT *****/
import React, { Component } from 'react';
import { HashRouter, Route, Switch, NavLink, Redirect } from 'react-router-dom'

/***** STORE *****/
import { connect } from 'react-redux';
import { signIn } from './store/actions';

/***** PAGES *****/
import Home from './pages/Home/Home.js';
import Contact from './pages/Contact/Contact.js';
import ContactDetails from './pages/ContactDetails/ContactDetails.js';
import ContactEdit from './pages/ContactEdit/ContactEdit.js';
import Statistic from './pages/Statistic/Statistic.js';
import Signup from './pages/Signup/Signup.js';

/***** CSS *****/
import './App.scss';
import './Util.scss';

/***** IMGS *****/
import menu from '../src/assets/img/icons8-menu-48.png';

class App extends Component {

  /***** DATA *****/
  state = {
    isLoading: true,
  }

  /***** METHODS *****/
  toggleMenu = (ev) => {
    let navClassList = document.querySelector('.main-nav').classList;
    navClassList.contains('show') ? navClassList.remove('show') : navClassList.add('show');
  }

  /***** LIFECYCLE *****/
  async componentDidMount() {
    await this.props.signIn();
    this.setState({ isLoading: false });
  }


  render() {
    return (
      <div className="App">
        {!this.state.isLoading && (
          <HashRouter>
            <img className="hamburger" onClick={this.toggleMenu} src={menu} alt="" />
            <nav className="main-nav">
              <NavLink exact to="/" className="nav-link" activeClassName="isActive">Home <span className="partial">|</span></NavLink>
              <NavLink to="/contact" className="nav-link" activeClassName="isActive">Contacts <span className="partial">|</span></NavLink>
              <NavLink to="/statistic" className="nav-link" activeClassName="isActive">Statistic <span className="partial">|</span></NavLink>
              <NavLink to="/signup" className="nav-link" activeClassName="isActive">Signup</NavLink>
            </nav>
            <Switch>
              <Route exact path="/" render={() => this.props.signedUser ? (<Home history={HashRouter} />) : (<Redirect to="/signup" />)} />
              <Route exact path="/signup" render={() => (<Signup history={HashRouter} />)} />
              <Route exact path="/contact" render={() => this.props.signedUser ? (<Contact />) : (<Redirect to="/signup" />)} />
              <Route exact path="/statistic" render={() => this.props.signedUser ? (<Statistic />) : (<Redirect to="/signup" />)} />
              <Route exact path="/contact/edit/:id?" render={(props) => this.props.signedUser ? (<ContactEdit {...props} />) : (<Redirect to="/signup" />)} />
              <Route exact path="/contact/:id" render={(props) => this.props.signedUser ? (<ContactDetails {...props} />) : (<Redirect to="/signup" />)} />
            </Switch>
          </HashRouter >
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    signedUser: state.signedUser
  };
};

export default connect(
  mapStateToProps,
  { signIn }
)(App);


