/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Choice from './components/choice';

import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';

export default class PokerAssistant extends Component {
	state = {	   
	    random: 1,
  	};

  _onButtonPress = () => {
  	rand = Math.floor((Math.random() * 2) + 1);
  	this.setState({random: rand});
  };

  render() {
    return (
		<View style={styles.container}>
			<View style={styles.button}>
				<Button
					onPress={this._onButtonPress}
					title="Random"
					accessibilityLabel="Random Button"
					color="red">
				</Button>
			</View>
			<View style={styles.choice}>
				<Choice random = {this.state.random}/>
			</View>
	    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : '#e5bcbc',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  choice: {
  	flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

AppRegistry.registerComponent('PokerAssistant', () => PokerAssistant);
