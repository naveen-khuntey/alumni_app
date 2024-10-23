import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Givingback } from '../components';
export default function GivingScreen() {
  return (
    <View style={styles.container}>
      <Givingback />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
