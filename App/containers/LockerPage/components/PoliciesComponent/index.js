import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, ListView, Text, TouchableHighlight} from "react-native";

class PoliciesComponent extends Component {

  componentWillMount() {
    const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 != r2
    });

    this.setState({
        dataSource: ds.cloneWithRows(this.props.policies),
    });
  }

  onLogoutPressed = () => {
      this.props.logout();
  };

  renderRow = (rowData) => {
    return <Text style={styles.policyRow}>{rowData}</Text>
  }

  render() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>{this.props.username}</Text>
            </View>
          <ListView
              dataSource={this.state.dataSource}
              renderRow={this.renderRow}/>
          <TouchableHighlight
              onPress={this.onLogoutPressed}
              style={styles.button}>
              <Text style={styles.buttonText}>
                  Log Out
              </Text>
          </TouchableHighlight>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        alignItems: 'center',
    },
    header: {
      backgroundColor: '#F34F58',
      width: '100%',
      alignItems: 'center',
      marginBottom: 20
    },
    headerText: {
        padding: 20,
        fontSize: 20,
        color: '#FFF'
    },
    policyRow: {
        backgroundColor: '#fff',
        color: '#F34F58',
        borderWidth: 1,
        borderColor: '#F34F58',
        padding: 20,
        flex: 1,
        flexDirection: 'row',
        width: '100%'
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
})

PoliciesComponent.propTypes = {
  policies: PropTypes.array.isRequired,
  username: PropTypes.string.isRequired,
};

export default PoliciesComponent;