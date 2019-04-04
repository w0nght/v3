/* signin.js */

import React, { Component }  from 'react';
import {
	StyleSheet,
	View,
	Text,
	Button,
	TextInput,
	TouchableOpacity,
	ScrollView,
	
} from 'react-native';
//import { CheckBox } from 'react-native-elements';
// import { Content, ListItem, CheckBox, Body} from 'native-base'
// import { Fonts } from '../src/utils/Fonts';
var FBLoginButton = require('../components/FBLoginButton');
import TextInputComp from '../components/TextInputComp';

export default class SigninScreen extends Component{
	state = { _fullname: "", _password: "", rememberMe: false,}
	submitCheck() {
		console.log('now run the register check' )
		const { _fullname, _password } = this.state
	}
	checkboxCheck() {

	}
	render() {
		return (
			<ScrollView contentContainerStyle={styles.contentContainer}>
   				<Text style={styles.screenTitle}>Sign In</Text>
   				<View style={styles.guildlineCont}>
	   				<Text style={styles.guildlineText}>Don't have a FinTipper account? </Text>
	   				<View style={styles.guildlineBtnCont}>
	   					<TouchableOpacity onPress={() => this.props.navigation.navigate('RegisterScreen')}>
	   						<Text style={styles.guildlineBtn}>Register!</Text>
	   					</TouchableOpacity>
	   				</View>
   				</View>
   				

   				<View style={styles.horizontalRule} />
   				<FBLoginButton />
   				<View style={styles.dividerContainer}>
   					<View style={styles.horizontalRuleOR} />
   					<Text style={styles.dividerText}>OR</Text>
   					<View style={styles.horizontalRuleOR} />
   				</View>
   				
				<TextInputComp id='Email' />
				<TextInputComp id='Password' />
		
				<View style={{flexDirection: 'row', alignItems: 'center', borderWidth: 0}}>
			  		{/*<ListItem onPress={() => this.setState({ rememberMe: !this.state.rememberMe })}>
				  	 	<CheckBox checked={this.state.rememberMe} 
						  	 	onPress={() => this.setState({ rememberMe: !this.state.rememberMe })} 
						  	 	// color='red'
						  	 	 />
						<Text style={styles.instructions}>Remember me?</Text>
					</ListItem>*/}
					{/*<CheckBox title='Remember Me'/>*/}
				</View>
				<TouchableOpacity onPress={() => this.props.navigation.navigate('ForgotPassword')}>
					<Text style={styles.forgotpasswordBtn}>Forgot your password?</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.btn_signin}  >
					<Text style={styles.buttonText}>SIGN IN!</Text>
				</TouchableOpacity>
			</ScrollView>
		)
	}
}

const styles = StyleSheet.create ({
	contentContainer: {
		backgroundColor: '#f5f5f5',
		paddingVertical: 20,
		alignItems: 'center',
		justifyContent: 'center'
	},
	screenTitle: {
	    fontSize: 22,
	    // fontFamily: Fonts.RobotoBold,
	    color: '#00d278',
	    textAlign: 'center',
	    margin: 24,
	},
	horizontalRule: {	/* Divider */
    	backgroundColor: '#d6d6d6',
  		height: 2,
 		width: 364,
 		marginVertical: 30,
	}, /* Divder row container */
	dividerContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	horizontalRuleOR: {	/* Divider */
    	backgroundColor: '#d6d6d6',
  		height: 2,
 		width: 144,
 		marginVertical: 30,
 		marginHorizontal: 24,
	},
	dividerText: {
		fontSize: 16,
	    // fontFamily: Fonts.LarsseitBold,
		letterSpacing: 2,
	    fontWeight: '500',
	    color: '#d6d6d6',
	},  /* Dont have an account?? */
	guildlineCont: {
		alignItems: 'center',
		paddingVertical: 6,
	},
	guildlineText: {
	    fontSize: 20,
	    // fontFamily: Fonts.Larsseit,
		color: 'black',
	}, /* register button container */
	guildlineBtnCont: {
		alignItems: 'center',
		justifyContent: 'center',
	}, /* register button */
	guildlineBtn: {
	    fontSize: 20,
		color: '#00d278',
		textDecorationLine: 'underline',
	},
	instructions: {
	    // fontFamily: Fonts.Larsseit,
		fontSize: 18,
		color: '#939393',
 		//marginVertical: 16,
	},
	forgotpasswordBtn: {
	    // fontFamily: Fonts.LarsseitBold,
		fontSize: 18,
		color: '#939393',
		textDecorationLine: 'underline',
 		// marginVertical: 12,
 		marginBottom: 20,

	},
	btn_signin: {
		width: 364,
		height: 64,
		marginVertical: 12,
		borderRadius: 8,
		paddingVertical: 18,
		backgroundColor: '#00d278',
	},
	buttonText: {
		// fontFamily: Fonts.LarsseitBold,
		letterSpacing: 2,
	    fontSize: 18,
	    fontWeight: '700',
		color: '#ffffff',
	    textAlign: 'center',
		alignItems: 'flex-end',
		justifyContent: 'center'
	},
});