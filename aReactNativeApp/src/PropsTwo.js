import React, { Component } from 'react';
import { Text, View } from 'react-native';

class PropsTwo extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

class LotsOfPropsTwos extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <PropsTwo name='Rexxar' />
        <PropsTwo name='Jaina' />
        <PropsTwo name='Valeera' />
      </View>
    );
  }
}

export default LotsOfPropsTwos;