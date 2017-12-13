import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { loginRequest } from './loginActions';
import {
    makeSelectIsLoginInProgress, makeSelectIsLoginFailed, makeSelectToken,
    makeSelectIsAuthenticated
} from './loginSelectors';
import FailurePage from "../../componentsCommon/FailurePage";
import LoginComponent from './components/LoginComponent';

class LoginPage extends Component {ß

  onLogin = (loginData) => {
      this.props.dispatchLoginRequest(loginData);
  }

  render() {
    let { isLoginInProgress, isLoginFailed, isAuthenticated } = this.props;

    let isFailed = isLoginFailed;

    if(isFailed){
      return(<FailurePage />);
    }

    return (<LoginComponent onLogin={this.onLogin} isAuthenticated={isAuthenticated} location={this.props.location}/>);
  }
}

LoginPage.propTypes = {
  isLoginInProgress: PropTypes.bool.isRequired,
  isLoginFailed: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  dispatchLoginRequest: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  isLoginInProgress: makeSelectIsLoginInProgress(),
  isLoginFailed: makeSelectIsLoginFailed(),
  isAuthenticated: makeSelectIsAuthenticated(),
});

const mapDispatchToPropsObj = {
  dispatchLoginRequest: loginRequest,
};

export default connect(mapStateToProps, mapDispatchToPropsObj) (LoginPage);