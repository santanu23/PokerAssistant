/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { TabViewAnimated, TabBar } from 'react-native-tab-view';

export default class PokerAssistant extends Component {
	state = {
	    index: 0,
	    routes: [
	      { key: '1', title: 'Random' },
	      { key: '2', title: 'Calculated' },
	    ],
  	};

  	_handleChangeTab = (index) => {
    this.setState({ index });
  };

  _renderHeader = (props) => {
    return <TabBar {...props} />;
  };

  _renderScene = ({ route }) => {
    switch (route.key) {
    case '1':
      return <View style={[ styles.page, { backgroundColor: '#ffffff' } ]}>
      			<Text>Flop</Text>
      			<Text>Check</Text>
      			<Text>Raise</Text>
      		 </View>;
    case '2':
      return <View style={[ styles.page, { backgroundColor: '#ffffff' } ]} />;
    default:
      return null;
    }
  };

  render() {
    return (
      <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onRequestChangeTab={this._handleChangeTab}
      ></TabViewAnimated>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

AppRegistry.registerComponent('PokerAssistant', () => PokerAssistant);
