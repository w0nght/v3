/* ForgotPassword.js */
'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Fonts } from '../src/utils/Fonts';
import TextInputComp from '../components/TextInputComp';
import { createStackNavigator  } from 'react-navigation';

class ForgotPassword extends Component {
	static navigationOptions = {
    title: 'Rest',
  };
  render() {
    return (
      <View style={styles.container}>
   		<Text style={styles.screenTitle}>Forgot Your Password?</Text>
   		<Text style={styles.guildlineText}>Enter the email address you used</Text>
   		<Text style={styles.guildlineText}>to sign up to FanTipper and we'll</Text>
   		<Text style={styles.guildlineText}>reset your password.</Text>
   		<View style={styles.horizontalRule} />
   		<TextInputComp id='Email address' />
   		<TouchableOpacity style={styles.btn_resetPassword}>
   			<Text style={styles.buttonText}>RESET PASSWORD</Text>
   		</TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#f5f5f5',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	screenTitle: {
	    fontSize: 24,
	    fontFamily: Fonts.RobotoBold,
	    color: '#00d278',
	    textAlign: 'center',
	    margin: 18,
	},
	guildlineText: {
		fontSize: 20,
	    fontFamily: Fonts.Larsseit,
		color: 'black',
		marginVertical: 2,

	},
	horizontalRule: {	/* Divider */
    	backgroundColor: '#d6d6d6',
  		height: 2,
 		width: 364,
 		marginVertical: 30,
	},
	btn_resetPassword: {
		width: 364,
		height: 64,
		marginVertical: 12,
		borderRadius: 8,
		paddingVertical: 18,
		backgroundColor: '#00d278',
	},
	buttonText: {
		fontFamily: Fonts.LarsseitBold,
		letterSpacing: 2,
	    fontSize: 18,
	    fontWeight: '700',
		color: '#ffffff',
	    textAlign: 'center',
		alignItems: 'flex-end',
		justifyContent: 'center'
	},
});


export default ForgotPassword;