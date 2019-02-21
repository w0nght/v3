/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import { createAppContainer, createDrawerNavigator } from 'react-navigation';

import fblogin from './app/views/fblogin';


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
        <View style={{ height: 1000, borderWidth: 15, borderColor: 'green'}} />
      </ScrollView>
    );
  }
}

const AppDrawerNavigatior = createDrawerNavigator({
  Home: Home,
  Dashboard: Dashboard,
  fblogin: fblogin,


},{
  unmountInactiveRoute: true,
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: 'orange',
    }
  }
});

const AppContainer = createAppContainer(AppDrawerNavigatior);

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
