import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getPoliciesRequest } from './lockerActions';
import { makeSelectIsGetPoliciesInProgress, makeSelectIsGetPoliciesFailed, makeSelectGetPolicies } from './lockerSelectors';
import Spinner from "../../componentsCommon/Spinner/index";
import FailurePage from "../../componentsCommon/FailurePage/index";
import PoliciesComponent from './components/PoliciesComponent';
import {makeSelectUsername, makeSelectToken} from "../LoginPage/loginSelectors";
import {logoutFromStorageRequest} from "../LoginPage/loginActions";

class LockerPage extends Component {

  componentWillMount(){
    if(this.props.token) {
      this.props.dispatchGetPoliciesRequest(this.props.token);
    }
  }

  render() {
    let { isGetPoliciesInProgress, isGetPoliciesFailed, policies, username } = this.props;
    let isLoading = !policies || !username;
    let isFailed = isGetPoliciesFailed;

    if(isFailed){
      return(<FailurePage />);
    }

    if(isLoading){
      return(<Spinner />);
    }

    return (<PoliciesComponent policies={ policies.toJS() } username={ username } logout={this.props.dispatchLogoutFromStorageRequest} />);
  }
}

LockerPage.propTypes = {
  isGetPoliciesInProgress: PropTypes.bool.isRequired,
  isGetPoliciesFailed: PropTypes.bool.isRequired,
  policies: PropTypes.object,
  username: PropTypes.string,
  dispatchGetPoliciesRequest: PropTypes.func.isRequired,
  dispatchLogoutFromStorageRequest: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  isGetPoliciesInProgress: makeSelectIsGetPoliciesInProgress(),
  isGetPoliciesFailed: makeSelectIsGetPoliciesFailed(),
  policies: makeSelectGetPolicies(),
  username: makeSelectUsername(),
  token: makeSelectToken(),
});

const mapDispatchToPropsObj = {
  dispatchGetPoliciesRequest: getPoliciesRequest,
  dispatchLogoutFromStorageRequest: logoutFromStorageRequest,
};

export default connect(mapStateToProps, mapDispatchToPropsObj) (LockerPage);