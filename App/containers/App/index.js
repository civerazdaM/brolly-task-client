import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {StyleSheet, View} from 'react-native';
import { NativeRouter, Route, Redirect, Switch } from 'react-router-native';
import LoginPage from '../LoginPage';
import PrivateRoute from '../../componentsCommon/PrivateRoute';
import LockerPage from '../LockerPage';
import { makeSelectIsAuthenticated } from '../LoginPage/loginSelectors';
import {loginFromStorageRequest} from '../LoginPage/loginActions';

class App extends React.Component {

    componentWillMount() {
        this.props.dispatchLoginFromStorageRequest();
    }

    render() {
        const { isAuthenticated } = this.props;
        return (
            <NativeRouter initialEntries={['/locker']} initialIndex={0}>
                <View style={styles.container}>
                    <Switch>
                        <Route exact path="/login" component={LoginPage} />
                        <PrivateRoute exact path="/locker" component={LockerPage} isAuthenticated={isAuthenticated}/>
                    </Switch>
                </View>
            </NativeRouter>
        );
    }
}

App.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    dispatchLoginFromStorageRequest: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
    isAuthenticated: makeSelectIsAuthenticated(),
});

const mapDispatchToPropsObj = {
    dispatchLoginFromStorageRequest: loginFromStorageRequest,
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        flex: 1,
        backgroundColor: '#F34F58'
    },
    btn: {
        width: 200,
        backgroundColor: '#FFF',
        color: '#F34F58',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginTop: 10,
    }
});

export default connect(mapStateToProps, mapDispatchToPropsObj)(App);
