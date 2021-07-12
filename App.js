import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Weather from './components/Weather';

export default function App() {

  return (
    <View style={styles.container}>
      <Weather zipCode="11506666"/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'gray',
    textAlignVertical:'top',
    paddingTop:25,

  },
});
