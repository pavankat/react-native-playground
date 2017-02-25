// Using Navigators:

// Mobile apps rarely consist of just one screen. As soon as you add a second screen to your app, you will have to take into consideration how the user will navigate from one screen to the other.

// You can use navigators to transition between multiple screens. These transitions can be typical side-to-side animations down a master/detail stack, or vertical modal popups.

// Navigator #

// React Native has several built-in navigation components, but for your first app you will probably want to use Navigator. It provides a JavaScript implementation of a navigation stack, so it works on both iOS and Android and is easy to customize.


// In this example, the MyScene component is passed the title of the current route via the title prop. It displays two tappable components that call the onForward and onBack functions passed through its props, which in turn will call navigator.push() and navigator.pop() as needed.

import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

export default class MyScene extends Component {
  render() {
    return (
      <View>
        <Text>Current Scene: {this.props.title}</Text>

        <TouchableHighlight onPress={this.props.onForward}>
          <Text>Tap me to load the next scene</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={this.props.onBack}>
          <Text>Tap me to go back</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

MyScene.propTypes = {
  title: PropTypes.string.isRequired,
  onForward: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
};