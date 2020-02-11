import React from 'react';
import { Text, StyleSheet } from 'react-native';

const defaultText = (props) => {
  return <Text style={styles.text}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'sans-serif'
  }
});

export default defaultText;
