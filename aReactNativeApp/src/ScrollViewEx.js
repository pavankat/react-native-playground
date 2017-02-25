// Using a ScrollView 
// The ScrollView is a generic scrolling container that can host multiple components and views. The scrollable items need not be homogenous, and you can scroll both vertically and horizontally (by setting the horizontal property).

// This example creates a vertical ScrollView with both images and text mixed together.

// ScrollView works best to present a small amount of things of a limited size. 

//All the elements and views of a ScrollView are rendered, even if they are not currently shown on the screen. If you have a long list of more items that can fit on the screen, you should use a ListView instead. So let's learn about the ListView next.

import React, { Component } from 'react';
import { ScrollView, Image, Text } from 'react-native'

class ShowALot extends Component {
  render() {
      return(
        <ScrollView>
          <Text style={{fontSize:96}}>Scroll me plz</Text>
          <Image source={require('./images/kitten-hug.jpg')} />
          <Image source={require('./images/kitten-hug.jpg')} />
          <Image source={require('./images/kitten-hug.jpg')} />
          <Image source={require('./images/kitten-hug.jpg')} />
          <Image source={require('./images/kitten-hug.jpg')} />
          <Text style={{fontSize:96}}>If you like</Text>
          <Image source={require('./images/kitten-hug.jpg')} />
          <Image source={require('./images/kitten-hug.jpg')} />
          <Image source={require('./images/kitten-hug.jpg')} />
          <Image source={require('./images/kitten-hug.jpg')} />
          <Image source={require('./images/kitten-hug.jpg')} />
          <Text style={{fontSize:96}}>Scrolling down</Text>
          <Image source={require('./images/kitten-hug.jpg')} />
          <Image source={require('./images/kitten-hug.jpg')} />
          <Image source={require('./images/kitten-hug.jpg')} />
          <Image source={require('./images/kitten-hug.jpg')} />
          <Image source={require('./images/kitten-hug.jpg')} />
          <Text style={{fontSize:96}}>What's the best</Text>
          <Image source={require('./images/kitten-hug.jpg')} />
          <Image source={require('./images/kitten-hug.jpg')} />
          <Image source={require('./images/kitten-hug.jpg')} />
          <Image source={require('./images/kitten-hug.jpg')} />
          <Image source={require('./images/kitten-hug.jpg')} />
          <Text style={{fontSize:96}}>Framework around?</Text>
          <Image source={require('./images/kitten-hug.jpg')} />
          <Image source={require('./images/kitten-hug.jpg')} />
          <Image source={require('./images/kitten-hug.jpg')} />
          <Image source={require('./images/kitten-hug.jpg')} />
          <Image source={require('./images/kitten-hug.jpg')} />
          <Text style={{fontSize:80}}>React Native</Text>
        </ScrollView>
    );
  }
}

export default ShowALot;