import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';

export default class Choice extends Component {
	render() {
		if (this.props.random == 1){
			return <Text style={styles.bet}>Bet</Text>
		}
		else {
			return <Text style={styles.fold}>Fold</Text>
		}
	}
}

const styles = StyleSheet.create({
  bet: {
  	color: 'green',
  	fontSize: 50,
  },
  fold: {
  	color: 'red',
  	fontSize: 50,
  },
});