import React from 'react'
import { NavigationContainer, StackAction } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ZipCodeScreen from './Screen/ZipCodeScreen';
import WeatherScreen from './Screen/WeatherScreen';
import { StyleSheet } from "react-native";

const Stack = createStackNavigator();

export default function App() {
  return ( 
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen style={styles.backdrop} name="Home" component={ZipCodeScreen} />
        <Stack.Screen  style={styles.backdrop} name="Weather" component={WeatherScreen} />
      </Stack.Navigator>
    </NavigationContainer> 
  );
 }

const styles = StyleSheet.create({
  backdrop:{
      backgroundColor:'black'
  },
})