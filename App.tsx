import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Logo from "./src/svgs/Logo";

export default function App() {
  return (
    <View style={styles.container}>
      <Logo/>
      <Text>Hola mediavida!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
