import React, {Component, PropTypes} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';

import Gif from './Gif';

class GifList extends Component{

  constructor(props) {
    super(props);
    this.getGifs = this.getGifs.bind(this); 
  }

  render(){
    return(
      <View style={styles.container}>
        <ScrollView>
          {this.getGifs()}
        </ScrollView>
      </View>
    )
  }
  
  getGifs() {

    let { gifs } = this.props;

    return Object.keys(gifs).map((id, i) => {
      return (<Gif key={i} gifUri={gifs[id].uri} />);
    });

  }

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    marginTop: 50,
    marginBottom: 40
  }
})

GifList.propTypes = {
  gifs: PropTypes.object.isRequired,
}

export default GifList;
