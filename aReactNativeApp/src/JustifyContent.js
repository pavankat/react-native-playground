// Justify Content 

// Adding justifyContent to a component's style determines the distribution of children along the primary axis. 

//Should children be distributed at the start, the center, the end, or spaced evenly? 

//Available options are flex-start, center, flex-end, space-around, and space-between.

import React, { Component } from 'react';
import { View } from 'react-native';

class JustifyContent extends Component {
  render() {
    return (
      // Try setting `justifyContent` to `center`.
      // Try setting `flexDirection` to `row`.
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
};

export default JustifyContent;