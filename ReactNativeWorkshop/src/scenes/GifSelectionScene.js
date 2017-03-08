import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import GifSelectionContainer from '../containers/GifSelectionContainer';

class GifSelectionScene extends Component{

  render(){
    return(
      <View style={styles.container}>
        <GifSelectionContainer />
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center'
  }
})

export default GifSelectionScene;
