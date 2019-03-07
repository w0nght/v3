/* TextInputComp.js */

import React, { Component }  from 'react';
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
} from 'react-native';
import { Fonts } from '../src/utils/Fonts';


export default class TextInputComp extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	value: this.props.value,
	  	id: this.props.id,
	  	borderColor: '#d6d6d6',
	  }

		/*if(this.props.id === "Email") {
			console.log('return email key board')}*/
	}
	static defaultProps = {
	  value: '',
	  id: ''
	  // isFocused: false,
	}

	onChangeText(value) {
		this.setState({ value: value });
	}
	onSubmitEditing(e) {
		console.log('onSubmitEditing called : ' + this.props.id.toString() + ': ' + e);
	}

	onFocus(e) {
		console.log('on focus called')
		this.setState({
			borderColor: '#00d278',
		});
	}
	onBlur(e) {
		console.log('on blur called');
		this.setState({
			borderColor: '#d6d6d6',
		})
	}

	// keyboardType(this.state.id) {
	// 	if(this.props.id === "Email") {
	// 		console.log('return email key board')
	// 	} else {
	// 		keyboardType={email-address}
	// 	}
	// // }
	// keyboardType(id) {
	// 	if (id.toString() === "Email"){
	// 		console.log("emailsdsdsakdlaflg")
	// 		return "email-address"
	// 		// this.setState({"email-address"})
	// 	}

	


	render() {

		return (
			<View>
			<TextInput 
				// placeholder=''
				placeholder={this.state.id}	
				placeholderTextColor='#6a6a6a'
				value={this.state.value}
				maxLength={40}
				selectionColor='#00d278'
				selectTextOnFocus={false}
				editable={true}
				onFocus={(e) => this.onFocus(e)}
				onBlur={(e) => this.onBlur(e)}
				// keyboardType={[(this.id === "Email") ? "email-address" : "default"]}
				// keyboardType={(id) => this.keyboardType(id)}
				onChangeText={(value) => this.onChangeText(value)}
				onSubmitEditing={(e) => this.onSubmitEditing(e.nativeEvent.text)}
				style={{
					width: 364,
					height: 52,
					backgroundColor: 'white',
					borderColor: this.state.borderColor,
					borderRadius: 8,
					borderWidth: 2,
					fontFamily: Fonts.LarsseitBold,
					fontSize: 16,
					marginVertical: 6,
					paddingHorizontal: 26,
				}}
			/>
			</View>
		)
	}

}