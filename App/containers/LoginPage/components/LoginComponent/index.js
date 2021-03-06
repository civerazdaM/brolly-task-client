import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-native';
import {StyleSheet, Text, TextInput, TouchableHighlight, View} from "react-native";

class LoginComponent extends Component {
    state = {
        username: '',
        usernameError: '',
        password: '',
        passwordError: ''
    };

    onLoginPressed = () => {
        let username = this.state.username;
        let password = this.state.password;
        let hasError = false;
        if(!username) {
            hasError = true;
            this.setState({usernameError: 'Username is required!'});
        }
        if(!password) {
            hasError = true;
            this.setState({passwordError: 'Password is required!'});
        }
        if(!hasError) {
            this.props.onLogin({username, password});
        }
    };

    changeUsername = (event) => {
        let username = event.nativeEvent.text;
        let usernameError = '';
        if(!username) {
            usernameError = 'Username is required!';
        }
        this.setState({username, usernameError});
    };

    changePassword = (event) => {
        let password = event.nativeEvent.text;
        let passwordError = '';
        if(!password) {
            passwordError = 'Password is required!';
        }
        this.setState({password, passwordError});
    };

    render() {
        const { from } = this.props.location.state || { from: { pathname: '/locker' } }
        const { isAuthenticated } = this.props;

        if (isAuthenticated) {
            return (
                <Redirect to={from}/>
            )
        }

        return (
            <View style={styles.container}>
                <Text>{this.state.usernameError}</Text>
                <TextInput
                    style={styles.input}
                    onChange={this.changeUsername}
                    placeholder={'Username'}
                />
                <Text>{this.state.passwordError}</Text>
                <TextInput
                    style={styles.input}
                    onChange={this.changePassword}
                    placeholder={'Password'}
                    secureTextEntry={true}
                />
                <TouchableHighlight
                    onPress={this.onLoginPressed}
                    style={styles.button}>
                    <Text style={styles.buttonText}>
                        Log in
                    </Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        paddingTop: 40,
        alignItems: 'center',
        padding: 10
    },
    input: {
        height: 50,
        marginTop: 10,
        padding: 4,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#F34F58',
        backgroundColor: '#FFF',
        color: '#F34F58',
        alignSelf: 'stretch'
    },
    button: {
        height: 50,
        backgroundColor: '#F34F58',
        alignSelf: 'stretch',
        marginTop: 10,
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 22,
        color: '#FFF',
        alignSelf: 'center'
    },
});

LoginComponent.propTypes = {
    onLogin: PropTypes.func.isRequired,
};

export default LoginComponent;