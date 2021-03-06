// With React Native, you don't use a special language or syntax for defining styles. 

//You just style your application using JavaScript. All of the core components accept a prop named style. 

//The style names and values usually match how CSS works on the web, except names are written using camel casing, e.g backgroundColor rather than background-color.

// The style prop can be a plain old JavaScript object. That's the simplest and what we usually use for example code. 

//You can also pass an array of styles - the last style in the array has precedence, so you can use this to inherit styles.

// As a component grows in complexity, it is often cleaner to use StyleSheet.create to define several styles in one place.

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Style extends Component {
  render() {
    return (
      <View>
        <Text style={styles.red}>just red</Text>
        <Text style={styles.bigblue}>just bigblue</Text>
        <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
        <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

export default Style;