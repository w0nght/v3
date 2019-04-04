{/* FBLoginButton.js 
	uses Login Button object from react-native-fbsdk module
*/}
import React, { Component } from 'react';
import { View } from 'react-native';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
const FBSDK = require('react-native-fbsdk');
const { GraphRequest, GraphRequestManager } = FBSDK;

export default class FBLoginButton extends Component {
	render() {
		return (
			<View>
				<LoginButton
					// readPermissions={["public_profile", 'email']}
					// publishPermission={["public_profile", "email"]}
					onLoginFinished={ (error, result) => {
						if (error) {
							alert("Login failed with error: " + result.error);
						} else if (result.isCancelled) {
							alert("Login was cancelled");
						} else {
							// alert("Login was successful with permissions: " + result.grantedPermissions);
							AccessToken.getCurrentAccessToken().then(
								(data) => {
									let accessToken = data.accessToken;
									//alert(accessToken.toString());

									// const responseInfoCallback = (error, result) => {
									/* Create response callback*/
									const _responseInfoCallback = (error, result) => {
										if (error) {
											console.log(error)
											// alert('error fetching data: ' + error.toString());
											alert('error fetching data: ' );
										} else {
											console.log(result)
											// alert('Success fetching data: ' + result["name"].toString());
											//alert('Success fetching data: ' + result.toString());
											alert('Success fetching data: ');
										}
									}
									/*const infoRequest = new GraphRequest(
										'/me', {
											accessToken: accessToken,
											parameters: {
												fields: {
													string: 'email, name, first_name, middle_name, last_name'
												}
											}
										},
										responseInfoCallback
										);*/
										/* Ceate a graph request asking for user information w/ a callback to handle the response. */
										const infoRequest = new GraphRequest( 
											'/me',
											{ 
										        accessToken: accessToken, 
										        parameters: { 
											        fields: { 
											         string: 'email,name,first_name,middle_name,last_name' 
											        } 
										        } 
									       }, 
								       _responseInfoCallback 
								      ); 
									// Start the graph request.
									new GraphRequestManager().addRequest(infoRequest).start();
									// alert(data.accessToken.toString())
									// console.log(data.accessToken.toString())
								}
							)
						}
					}}
					onLogoutFinished={() => alert("User logged out")} 
				/>
			</View>
		);
	}
};

module.exports = FBLoginButton;