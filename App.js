import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Profile from './screen/Profile'
export default function App() {
  return (
    <View style={styles.container}>
      <Profile name="Atefah" phone="0789454645" email="Atefah@gmail.com" />
    </View>    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
