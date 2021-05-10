import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import WelcomeSreen from "./screens/welcomeScreen"
import {createSwitchNavigator , createAppContainer} from "react-navigation"
import DietPlanner from "./screens/dietPlanner"
import Breakfast1 from './screens/breakfast1';
import Breakfast2 from './screens/breakfast2';
import Breakfast3 from "./screens/breakfast3";
import Breakfast4 from './screens/breakfast4';
import {AppDrawerNavigator} from "./components/AppDrawerNavigator";
import BreakfastScreen from "./screens/breakfastScreen"
import LunchScreen from "./screens/lunchScreen"
import SnacksScreen from './screens/snacksScreen';
import DinnerScreen from './screens/dinnerScreen';


export default function App() {
  return (
    < AppContainer />
  );

}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

 const SwitchNavigator = createSwitchNavigator({
  Welcome:{screen:WelcomeSreen},
  Drawer:{screen:AppDrawerNavigator},
  // Break1:{screen:Breakfast1},
  // Break2:{screen:Breakfast2},
  // Break3:{screen:Breakfast3},
  // Break4:{screen:Breakfast4},
  // Breakfast:{screen:BreakfastScreen},
  // Lunch:{screen:LunchScreen},
  // Snacks:{screen:SnacksScreen},
  // Dinner:{screen:DinnerScreen},







 
})

const AppContainer= createAppContainer(SwitchNavigator)
