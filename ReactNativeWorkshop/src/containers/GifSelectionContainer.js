import React, {Component} from 'react';
import { Actions as RouteActions } from 'react-native-router-flux';
import {View, Text, StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as ActionCreators from '../actions/actions';

import SelectionCarousel from '../components/gifs/SelectionCarousel';

class GifSelectionContainer extends Component{
  
  constructor(props) {
    super(props);

    this.handleLike = this.handleLike.bind(this);
    this.handleDislike = this.handleDislike.bind(this);

  }

  componentWillReceiveProps(nextProps) {

    /**
     * When all gifs have been liked/disliked route to categories to start over 
     */
    if (Object.keys(nextProps.gifs.items).length < 1) RouteActions.pop();

  }

  render(){
    
    let { gifs } = this.props;

    let activeGifId = Object.keys(gifs.items).pop();

    if (!activeGifId) return null;

    return(
      <View style={styles.container}>
        <SelectionCarousel 
          gif={gifs.items[activeGifId]} 
          onLike={this.handleLike}
          onDislike={this.handleDislike}
        />
      </View>
    )
  }

  handleLike(id) {

    let { gifs, Actions } = this.props;
    Actions.like(gifs.items[id]);

  }

  handleDislike(id) {

    let { gifs, Actions } = this.props;
    Actions.dislike(gifs.items[id]);

  }

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
  },
  text:{
    color:'#05668D'
  }
})

function mapStateToProps(state) {
  return { gifs: state.gifs };
}

function mapDispatchToProps(dispatch) {
  return {
    Actions: bindActionCreators(ActionCreators, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GifSelectionContainer);
