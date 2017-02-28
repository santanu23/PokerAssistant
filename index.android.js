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
		<View>
			<View style={{}}>
				<Button
					onPress={this._onButtonPress}
					title="Random"
					accessibilityLabel="Random Button"
					color="green">
				</Button>
			</View>
			<View style={{}}>
				<Choice random = {this.state.random}/>
			</View>
	    </View>
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
