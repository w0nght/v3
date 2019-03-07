/* LoginScreen.js */

import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Button,
	TextInput,
	AsyncStorage
} from 'react-native';

var FBLoginButton = require('../components/FBLoginButton');

class LoginScreen extends Component {
	render() {
		return(
			<View style={styles.container}>
   				<Text style={styles.welcome}>Login screen!</Text>

				<FBLoginButton />
			</View>
			)
	}
}

export default LoginScreen;

const styles = StyleSheet.create ({
	container: {
		flex: 1,
		backgroundColor: '#00d278',
		alignItems: 'center',
		justifyContent: 'center'
	},
	welcome: {
	    fontSize: 20,
	    textAlign: 'center',
	    margin: 10,
	},
});