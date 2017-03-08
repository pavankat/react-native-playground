import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import CategoriesContainer from '../containers/CategoriesContainer.js';

class CategoriesScene extends Component{

  render(){
    return(
      <View style={styles.container}>
        <CategoriesContainer />
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
  }
})

export default CategoriesScene;
