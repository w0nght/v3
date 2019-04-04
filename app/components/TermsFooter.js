/*TermsFooter.js*/
'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

// import { Fonts } from '../src/utils/Fonts';

class TermsFooter extends Component {
  render() {
    return (
      <View>
      	<View style={styles.footerTextCont}>
			<Text style={styles.instructions}>By signing up, you agree to FanTipper's</Text>
				<View style={styles.footerBtnCont}>
					<TouchableOpacity>
	   					<Text style={styles.footerBtn}>T&C</Text>
	   				</TouchableOpacity>
					<Text style={styles.instructions}>'s and </Text>
					<TouchableOpacity>
	   					<Text style={styles.footerBtn}>Privacy Policy</Text>
	   				</TouchableOpacity>
					<Text style={styles.instructions}>.</Text>
				</View>
			</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	footerTextCont: {
		paddingVertical: 20,
		alignItems: 'center',
	},
	footerBtnCont: {
		flexDirection: 'row',
	},
	instructions: {
	    // fontFamily: Fonts.Larsseit,
		fontSize: 18,
		color: '#939393',
	},
	footerBtn: {
	    // fontFamily: Fonts.Larsseit,
		fontSize: 18,
		color: '#939393',
		textDecorationLine: 'underline',
	},

});


export default TermsFooter;