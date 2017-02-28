import React, { Component } from 'react';
import { Text } from 'react-native';

export default class Choice extends Component {
	render() {
		if (this.props.random == 1){
			return <Text>Bet</Text>
		}
		else {
			return <Text>Flop</Text>
		}
	}
}
