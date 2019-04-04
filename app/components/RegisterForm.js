/* RegisterForm.js */

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

export default class RegisterForm extends Component<{}> {
	onFocus() {
		this.setState({
			borderColor: 'green'
		})
	};
	onBlur() {
		this.setState({
			borderColor: 'yellow'
		})
	};
	render() {
		return(
			<View style={styles.container}>
   				<TextInput 
   					style={styles.inputBox} 
   					onFocus={ () => this.onFocus() }
   					onBlur={ () => this.onBlur() }
   					underlineColorAndroid='rgba(0,0,0,0)'
   					placeholder="Name" 
   					placeholderTextColor="grey" />
				<TextInput 
   					style={styles.inputBox} 
   					onFocus={ () => this.onFocus() }
   					onBlur={ () => this.onBlur() }
   					underlineColorAndroid='rgba(0,0,0,0)'
   					placeholder="Email" 
   					placeholderTextColor="grey" />
   				<TextInput 
   					style={styles.inputBox} 
   					onFocus={ () => this.onFocus() }
   					onBlur={ () => this.onBlur() }
   					underlineColorAndroid='rgba(0,0,0,0)'
   					placeholder="Password" 
   					placeholderTextColor="grey" />
				<TextInput 
   					style={styles.inputBox} 
   					onFocus={ () => this.onFocus() }
   					onBlur={ () => this.onBlur() }
   					underlineColorAndroid='rgba(0,0,0,0)'
   					placeholder="Confirm Password" 
   					placeholderTextColor="grey" />
   				<TextInput 
   					style={styles.inputBox} 
   					onFocus={ () => this.onFocus() }
   					onBlur={ () => this.onBlur() }
   					underlineColorAndroid='rgba(0,0,0,0)'
   					placeholder="Location" 
   					placeholderTextColor="grey" />
				<TouchableOpacity style={styles.button_choosePhoto}>
					<Text style={styles.buttonText2}>CHOOSE PROFILE PHOTO</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button_register}>
					<Text style={styles.buttonText}>REGISTER!</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create ({
	container: {
		flex: 1,
		backgroundColor: '#f0f0f0',
		alignItems: 'center',
		justifyContent: 'center'
	},
	inputBox: {
		width: 300,
		backgroundColor: 'white',
		borderRadius: 20,
		borderWidth: 2,
		// borderColor: '#dfdfdf',
		paddingHorizontal: 16,
		fontSize: 16,
		marginVertical: 6,
	},
	button_choosePhoto: {
		width: 300,
		// height: 50,
		// paddingHorizontal: 16,
		marginVertical: 6,
		borderRadius: 15,
		paddingVertical: 14,
		backgroundColor: '#939393',
	},
	button_register: {
		width: 300,
		// height: 50,
		// paddingHorizontal: 16,
		marginVertical: 6,
		borderRadius: 15,
		paddingVertical: 14,
		backgroundColor: '#00d278',
	},
	buttonText: {
		fontFamily: 'Roboto',
	    fontSize: 20,
	    fontWeight: '300',
		color: '#ffffff',
	    textAlign: 'center',
		alignItems: 'center',
		justifyContent: 'center'
	},
	buttonText2: {
		fontSize: 20,
	    fontWeight: '200',
		color: '#ffffff',
	    textAlign: 'center',
		alignItems: 'center',
		justifyContent: 'center'
	}
});