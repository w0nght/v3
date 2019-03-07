/* RegisterScreen.js */

import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Button,
	TextInput,
	TouchableOpacity,
	ScrollView,
} from 'react-native';
//import { TextField } from 'react-native-material-textfield';
import { Fonts } from '../src/utils/Fonts';

class RegisterScreen extends Component {
	
	constructor(props) {
	  super(props);
	
	  this.state = {
	 //  	email: '',
	 //  	password: '',
		// confirmPassword: ''
	  };
	}

	handleSubmit = () => {
		const { password, confirmPassword } = this.state;
		// perform all neccassary validations
		if (password !== confirmPassword) {
			alert('Passwords do not match');
		} else {
			// make API call
		}
	}
/*	state = { isFocused: false };
	onFocusChange = () => {
		this.setState({ isFocused: true });
	};
	onBlurChange = () => {
		this.setState({ isFocused: false });
	} */
	// onFocus() {
	// 	this.setState({
	// 		borderColor: 'green',
	// 	borderWidth: 2,

	// 	})
	// }
	// onBlur() {
	// 	this.setState({
	// 		borderColor: 'yellow',
	// 	borderWidth: 2,
			
	// 	})
	// }
	render() {
		let { fname } = this.state;

		return(
			<View style={styles.container}>
   				<Text style={styles.screenTitle}>Register</Text>
   				<View style={styles.signinTextCont}>
	   				<Text style={styles.signinText}>Already have an account? </Text>
	   				<TouchableOpacity>
	   					<Text style={styles.signinBtn}>Sign in</Text>
	   				</TouchableOpacity>
   				</View>
   				<View style={styles.siteTextCont}>
	   				<Text style={styles.instructions}>To become a Creator, please visit our </Text>
	   				<View style={styles.siteBtnCont}>
		   				<TouchableOpacity>
			   					<Text style={styles.siteBtn}>full desktop site</Text>
			   				</TouchableOpacity>
		   				<Text style={styles.instructions}>.</Text>
	   				</View>
   				</View>
			
   				<TextInput 
   					// onFocus={this.onFocusChange.bind(this)}
   					// onBlur={this.onBlurChange}
   					// onFocus={alert("on focus")}
   					style={[styles.inputBox, this.state.isFocused ? styles.boxActive : styles.boxInactive ]} 
   					// style={styles.inputBox, borderColor: this.state.borderColor } 
   					style={{borderColor: this.state.borderColor }} 

   					// onBlur={ () => this.onBlur() }
   					// onFocus={ () => this.onFocus() }
   					underlineColorAndroid='rgba(0,0,0,0)'
   					placeholder="Name" 
   					placeholderTextColor="grey" 
   					returnKeyType="next"
   					onSubmitEditing={() => this.email.focus()}

   					/>
				<TextInput 
   					ref={(input) => this.email = input}
   					// onFocus={this.onFocusChange.bind(this)}
   					// onBlur={this.onBlurChange}
   					// style={styles.inputBox} 
   					// style={[styles.inputBox, this.state.isFocused ? styles.boxActive : styles.boxInactive ]} 

   					// onFocus={ () => this.onFocus() }
   					// onBlur={ () => this.onBlur() }
   					selectionColor="yellow"
   					underlineColorAndroid='rgba(0,0,0,0)'
   					placeholder="Email" 
   					placeholderTextColor="grey" 
   					keyboardType="email-address"
   					autoCapitalize="none"
   					autoCorrect={false}
   					onSubmitEditing={() => this.password.focus()}
					// onChangeText={(email) => this.setState({email})}
   					/>
   					
   				<TextInput 
   					ref={(input) => this.password = input}
   					style={styles.inputBox} 
   					// onFocus={ () => this.onFocus() }
   					// onBlur={ () => this.onBlur() }
   					underlineColorAndroid='rgba(0,0,0,0)'
   					placeholder="Password" 
   					secureTextEntry={true}
   					placeholderTextColor="grey"
   					onSubmitEditing={() => this.confirmPassword.focus()}
   					/>
				<TextInput 
   					ref={(input) => this.confirmPassword = input}
   					style={styles.inputBox} 
   					// onFocus={ () => this.onFocus() }
   					// onBlur={ () => this.onBlur() }
   					underlineColorAndroid='rgba(0,0,0,0)'
   					placeholder="Confirm Password" 
   					secureTextEntry={true}
   					placeholderTextColor="grey" 
   					onSubmitEditing={() => this.location.focus()}
   					/>
   				<TextInput 
   					ref={(input) => this.location = input}
   					style={styles.inputBox} 
   					// onFocus={ () => this.onFocus() }
   					// onBlur={ () => this.onBlur() }
   					underlineColorAndroid='rgba(0,0,0,0)'
   					placeholder="Location" 
   					placeholderTextColor="grey" 
   					/>
				<TouchableOpacity style={styles.btn_choosePhoto}>
					<Text style={styles.buttonText}>CHOOSE PROFILE PHOTO</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.btn_register}>
					<Text style={styles.buttonText}>REGISTER!</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

export default RegisterScreen;

const styles = StyleSheet.create ({
	container: {
		flex: 1,
		backgroundColor: '#f0f0f0',
		alignItems: 'center',
		justifyContent: 'center'
	},
	container2: {
		margin: 8,
		marginTop: 24,
	},
	screenTitle: {
	    fontSize: 22,
	    fontFamily: Fonts.RobotoBold,
	    color: '#00d278',
	    textAlign: 'center',
	    margin: 24,
	},	/* already have an account */
	signinTextCont: {
		// flexGrow: 1,
		alignItems: 'flex-end',
		paddingVertical: 16,
		flexDirection: 'row',
	},
	signinText: {
	    fontSize: 18,
	    fontFamily: Fonts.Larsseit,
		color: 'black',
	},
	signinBtn: {
	    fontSize: 18,
		color: '#00d278',
		textDecorationLine: 'underline',
	}, /* full desktop site for creator */
	siteTextCont: {
		alignItems: 'flex-end',
		paddingVertical: 16,
		// flexDirection: 'row',
		alignItems: 'center',

	},
	siteBtnCont: {
		flexDirection: 'row',

	},
	instructions: {
		fontSize: 15,
		color: '#939393',
	    // textAlign: 'center',
	},
	siteBtn: {
		fontSize: 15,
		color: '#939393',
	    // textAlign: 'center',
		// alignItems: 'center',

		textDecorationLine: 'underline',
	},
	inputBox: {
		width: 300,
		backgroundColor: 'white',
		borderRadius: 20,
		// borderColor: '#dfdfdf',
		paddingHorizontal: 16,
		fontSize: 16,
		marginVertical: 6,
	},
	boxActive: {
		borderWidth: 2,

		borderColor: '#00d278',

	},
	boxInactive: {
		borderWidth: 2,

		borderColor: 'black',

	},
	btn_choosePhoto: {
		width: 300,
		// height: 50,
		// paddingHorizontal: 16,
		marginVertical: 6,
		borderRadius: 15,
		paddingVertical: 14,
		backgroundColor: '#939393',
	},
	btn_register: {
		width: 300,
		// height: 50,
		// paddingHorizontal: 16,
		marginVertical: 6,
		borderRadius: 15,
		paddingVertical: 14,
		backgroundColor: '#00d278',
	},
	buttonText: {
		fontFamily: Fonts.Larsseit,
	    fontSize: 17,
	    fontWeight: '200',
		color: '#ffffff',
	    textAlign: 'center',
		alignItems: 'center',
		justifyContent: 'center'
	},
});