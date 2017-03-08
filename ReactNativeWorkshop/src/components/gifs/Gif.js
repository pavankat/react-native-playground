import React, {Component, PropTypes} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

class Gif extends Component{

  render(){

    let { gifUri } = this.props; 

    return(
      <View style={styles.container}>
        <Image source={{uri: gifUri}} style={styles.gif} /> 
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
  },
  gif:{
    width: 400,
    height: 300
  }
})

Gif.propTypes = {
  gifUri: PropTypes.string.isRequired
}

export default Gif;
