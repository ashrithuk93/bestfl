import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import ReviewScreen from './screens/ReviewScreen';
import SettingsScreen from './screens/SettingsScreen';


const MainNavigator = createBottomTabNavigator({
  welcome: { screen: WelcomeScreen },
  auth: { screen: AuthScreen },
  main: createBottomTabNavigator({
          map: { screen: MapScreen },
          deck: { screen: DeckScreen },
          review: createStackNavigator({
            review: ReviewScreen,
            settings: SettingsScreen
          })
      })
  }
);

const App = createAppContainer(MainNavigator);

/*
class App extends Component {
  render() {
    const MainNavigator = createBottomTabNavigator({
      welcome: WelcomeScreen,
      auth: AuthScreen
    })

    const Stacked = createAppContainer(MainNavigator);

    return (
      <View style={styles.container}>
        <MainNavigator />
      </View>
    )
  }
}
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
