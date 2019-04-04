/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, Button, Image, TouchableOpacity } from 'react-native';
import { 
  createSwitchNavigator, 
  createAppContainer, 
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator,
 } from 'react-navigation';

import fblogin from './app/views/fblogin';
import HelloFacebook from './app/components/HelloFacebook';
import FetchTest from './app/route/FetchTest';

import ForgotPassword from './app/views/ForgotPassword';
import RegisterScreen from './app/views/RegisterScreen';
import SigninScreen from './app/views/SigninScreen';
import SignOrReg from './app/views/SignOrReg';



import FontAwesome from 'react-native-vector-icons/FontAwesome';



export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

class Home extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: 'green'
    }
  };
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to v3</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
      </View>
    );
  }
}

class Dashboard extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: 'white'
    }
  };
  render() {
    return( 
      <ScrollView>
        <View style={{ height: 1000, borderWidth: 15, borderColor: 'green' }} />
      </ScrollView>
    );
  }
}

/** for appSwitchNavigator **/
class WelcomeScreen extends Component {
  render() {
    return(
      <View style={{ flex:1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>WelcomeScreen</Text>
        <Button title='Login' onPress={() => this.props.navigation.navigate('dashboard')} />
        <Button title='Sign up' onPress={() => this.props.navigation.navigate('dashboard')} />
      </View>
      );
  }
}
class dashboardScreen extends Component {
  render() {
    return(
      <View style={{ flex:1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>dashboardScreen</Text>
      </View>
      );
  }
}
/** for dashboardTabNavigator */
class Feed extends Component {
  render() {
    return(
      <View style={{ flex:1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={{
        flex:1, 
        height: 40,
        width: '100%',
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: 'lightgreen',
        flexDirection: 'row'
      }}>
    {/* fetch nearyby data from database when onpress*/}
        <Text style={{ color: 'white', fontSize: 16 }}>Nearby </Text>
        <FontAwesome 
                name="map-marker" 
                color="white"
                size={16}
                />
      </View>
        <View style={{
        flex:12, 
        height: 40,
        width: '100%',
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: 'lightblue',
        flexDirection: 'row'
      }}>
        <Text>Feed</Text>
        </View>
      </View>
      );
  }
}
class Profile extends Component {
  render() {
    return(
      <View style={{ flex:1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile</Text>
      </View>
      );
  }
}
class Settings extends Component {
  render() {
    return(
      <View style={{flex:1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Settings</Text>
      </View>
      );
  }
}

const dashboardTabNavigator = createBottomTabNavigator({
  Feed,
  Profile,
  Settings
}
// ,{
//   navigationOptions:({navigation}) => {
//     const {routeName} = navigation.state.routes[navigation.state.index];
//     return{
//       headerTitle: routeName
//     };
//   }
// }
);

const dashboardStackNavigator = createStackNavigator({
  dashboardTabNavigator: dashboardTabNavigator
},{
  defaultNavigationOptions:({ navigation }) => {
    return {
      headerLeft: <FontAwesome 
              name="angle-left" 
              size={40} 
              color="#00d278" 
              style={{ paddingLeft: 20 }} />,
      headerRight: <FontAwesome 
              name="bars" 
              size={30} 
              color="#00d278" 
              style={{ paddingRight: 10}} 
              onPress={() => navigation.openDrawer() } />,
      headerTitle: <View style={{ 
                flex: 1,
                // borderWidth:2,
                // borderColor:"blue",
                justifyContent: "center",
                alignItems: "center",
                marginHorizontal: 40,
                paddingTop: 30,
                // paddingVertical: 20,
              }}>
                <TouchableOpacity onPress={() => navigation.navigate('Settings')} >
                  <Image 
                  source={require('./app/assets/images/Fan_Tipper_Logo_Green.png')}
                  resizeMode="center"
                  />
              </TouchableOpacity>
              </View>
    }
  }
});
const AppDrawerNavigatior2rnv3 = createDrawerNavigator({
  dashboard: {
    screen: dashboardStackNavigator
  }
});

const appSwitchNavigator = createSwitchNavigator({
  welcome:{screen:WelcomeScreen},
  dashboard: {screen:AppDrawerNavigatior2rnv3}
});
const AppDrawerNavigatior = createDrawerNavigator({
  Home: Home,
  Dashboard: Dashboard,
  fblogin: fblogin,
  HelloFacebook: HelloFacebook,
  FetchTest: FetchTest,
  ForgotPassword: ForgotPassword,
  RegisterScreen: RegisterScreen,
  SignOrReg: SignOrReg,
  SigninScreen: SigninScreen,

},{
  unmountInactiveRoute: true,
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: 'orange',
    }
  }
});

// currently creating
const AppContainer = createAppContainer(appSwitchNavigator);

// the one with login, forgot pw, register done
// const AppContainer = createAppContainer(AppDrawerNavigatior);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
