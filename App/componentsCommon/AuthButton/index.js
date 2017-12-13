import * as React from "react";
import {withRouter} from "react-router-native";
import {StyleSheet, Text, TouchableHighlight, View} from "react-native";

const AuthButton = withRouter(({ history, isAuthenticated }) => (
    isAuthenticated ? (
        <View>
            <Text>Welcome!</Text>
            <TouchableHighlight style={styles.btn} underlayColor='#f0f4f7' onPress={() => {
                fakeAuth.signout(() => history.push('/'))
            }}><Text>Sign out</Text></TouchableHighlight>
        </View>
    ) : (
        <Text>Yoßu are not logged in.</Text>
    )
))

const styles = StyleSheet.create({
    btn: {
        width: 200,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginTop: 10,
    }
})

export default AuthButton