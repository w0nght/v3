/* SignOrReg.js */
// need the cafe background
'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
// import { Fonts } from '../src/utils/Fonts';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import TermsFooter from '../components/TermsFooter';

class SignOrReg extends Component {
  render() {
    return (
      <View style={styles.container}>
	      <View style={styles.bottomBtnsContainer}>
		      <View style={styles.signInBtn}>
		        <FontAwesome.Button 
		            name="unlock-alt"
		            size={30}
		            onPress={this._fbAuth}
		            backgroundColor='transparent'
		            // paddingVertical={20}
		            // marginVertical={10}
		            width={364}
		            height={64}
		            paddingVertical={26}
		            paddingHorizontal={18}
		            // the onPRes is not working
		            // no stack ?? 
		            // onPress={this.props.navigation.navigate('RegisterScreen')}
		            >
		          <Text style={styles.signInBtnText}>Register</Text>
		        </FontAwesome.Button>
	        </View>
	        <View style={styles.registerBtn}>
		        <FontAwesome.Button 
		            name="plus"
		            size={30}
		            onPress={this._fbAuth}
		            backgroundColor='transparent'
		            // paddingVertical={20}
		            // marginVertical={10}
		            width={364}
		            height={64}
		            //paddingVertical={26}
		            //paddingHorizontal={18}

		            >
		          <Text style={styles.signInBtnText}>sign in</Text>
		        </FontAwesome.Button>
	        </View>
		    {/*<TouchableOpacity style={styles.signInBtn}>
		    </TouchableOpacity>*/}
      	</View>
      	<TermsFooter />
      </View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'orange',
		flex: 1,
		// paddingVertical: 20,
		alignItems: 'center',
		justifyContent: 'center'
	},
	bottomBtnsContainer: {
		// flex: 2,
		borderWidth: 2,
		borderColor: 'white',
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'center',
		// marginHorizontal: 20,
		// margin: 18,
		// paddingHorizontal: 20,
	},
	signInBtn: {
		backgroundColor: 'transparent',
		borderWidth: 4,
		borderRadius: 12,
		borderColor: 'white',
		width: 160,
		height: 70,
		// paddingHorizontal: 20,
		marginHorizontal: 16,

	},
	registerBtn: {
		backgroundColor: 'transparent',
		borderWidth: 4,
		borderRadius: 12,
		borderColor: 'white',
		width: 160,
		height: 70,
		marginHorizontal: 16,

	},
	signInBtnText: {
		color: 'white',
		// fontFamily: Fonts.RobotoBlack,
		fontSize: 20,
	}

});


export default SignOrReg;