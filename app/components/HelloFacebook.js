const FBSDK = require('react-native-fbsdk');

import React, {Component} from 'react';
import {
  Alert,
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
} from 'react-native';
// import { Fonts } from '../src/utils/Fonts';

// import Icon from'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const {LoginButton,LoginManager , ShareDialog, FBGraphRequest} = FBSDK;

export default class HelloFacebook extends Component {
  constructor(props) {
    super(props);

    const shareLinkContent = {
      contentType: 'link',
      contentUrl: 'https://www.facebook.com/',
    };

    this.state = {
      shareLinkContent,
      email: 'jhhgjgh',
    };
  }

  _fbAuth() {
    LoginManager.logInWithReadPermissions(['public_profile']).then(function(result) {
      if (result.isCancelled) {
        console.log("Login Cancelled");
      } else {
        console.log("Login Success permission granted:" + result.grantedPermissions);
      }
    }, function(error) {
       console.log("some error occurred!!");
    })
  }


  async shareLinkWithShareDialog() {
    const canShow = await ShareDialog.canShow(this.state.shareLinkContent);
    if (canShow) {
      try {
        const {isCancelled, postId} = await ShareDialog.show(
          this.state.shareLinkContent,
        );
        if (isCancelled) {
          Alert.alert('Share cancelled');
        } else {
          Alert.alert('Share success with postId: ' + postId);
        }
      } catch (error) {
        Alert.alert('Share fail with error: ' + error);
      }
    }
  }

  async facebookLogin() {
  // native_only config will fail in the case that the user has
  // not installed in his device the Facebook app. In this case we
  // need to go for webview.
  let result;
  try {
    this.setState({showLoadingModal: true});   
    LoginManager.setLoginBehavior('NATIVE_ONLY');
    result = await LoginManager.logInWithReadPermissions(['public_profile', 'email']);
  } catch (nativeError) {
    try {
      LoginManager.setLoginBehavior('WEB_ONLY');
      result = await LoginManager.logInWithReadPermissions(['public_profile', 'email']);
    } catch (webError) {
      // show error message to the user if none of the FB screens
      // did not open
    }
  }

  // handle the case that users clicks cancel button in Login view
  if (result.isCancelled) {
    this.setState({
      showLoadingModal: false,
      notificationMessage: I18n.t('welcome.FACEBOOK_CANCEL_LOGIN')
    });
  } else {
    // Create a graph request asking for user information
    this.FBGraphRequest('id, email, picture.type(large)', this.FBLoginCallback);
  }
}

async FBGraphRequest(fields, callback) {
  const accessData = await AccessToken.getCurrentAccessToken();

  // Create a graph request asking for user information
  const infoRequest = new GraphRequest('/me', {
    accessToken: accessData.accessToken,
    parameters: {
      fields: {
        string: fields
      }
    }
  }, callback.bind(this));

  // Execute the graph request created above
  new GraphRequestManager().addRequest(infoRequest).start();
}
async FBLoginCallback(error, result) {
  if (error) {
    this.setState({
      showLoadingModal: false,
      notificationMessage: I18n.t('welcome.FACEBOOK_GRAPH_REQUEST_ERROR')
    });
  } else {
    // Retrieve and save user details in state. In our case with 
    // Redux and custom action saveUser
    console.log(result);
    this.setState.saveUser({
      id: result.id,
      email: result.email,
      image: result.picture.data.url
    });
  }
}

  render() {
    return (
      <View style={styles.container}>
      {/*  1st   */}
        <LoginButton />
      {/*   2nd the fantip style   */}

        <View style={styles.fblogCont}>
        <FontAwesome.Button 
            name="facebook-square"
            size={30}
            onPress={this._fbAuth}
            backgroundColor={'#3b5998'}
            // paddingVertical={20}
            // marginVertical={10}
            width={364}
            height={64}
            paddingVertical={26}
            paddingHorizontal={18}
            >
          <Text style={styles.fblogBtnText}>CONTINUE WITH FACEBOOK {this.state.email}</Text>
        </FontAwesome.Button>

        </View>
        <View>

          <Text> {this.props.email}
          </Text>
        </View>
        
        <TouchableHighlight
          style={styles.share}
          onPress={this.shareLinkWithShareDialog.bind(this)}>
          <Text style={styles.shareText}>Share link with ShareDialog</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  fblogCont: {
    paddingVertical: 10,
  },
  fblogBtnText: {
    fontSize: 18,
    color: '#FFFFFF',
   // fontFamily: Fonts.LarsseitBold,
    fontWeight: '400',
    paddingHorizontal: 10,
    letterSpacing: 2,
    //check
    //borderWidth: 2,
    //borderColor: 'black',

    // textTransform: 'capitalize'
  },
  fblogbtn: {
    width: 350,
    borderColor: "blue",
    borderWidth: 2,
  },
  shareText: {
    fontSize: 20,
    margin: 10,
  },
});
