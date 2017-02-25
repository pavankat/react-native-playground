/* 

We will start by rendering a Navigator, and then let the Navigator render the scene for you by passing in your own render function to its renderScene prop. 


ROUTES

Something you will encounter a lot when dealing with navigation is the concept of routes. 

A route is an object that contains information about a scene. 

It is used to provide all the context that the navigator's renderScene function needs to render a scene. 

It can have any number of keys to help distinguish your scene, and I happened to pick a single title key for the above example.

*/
import React, { Component } from 'react';
import { View, Text, Navigator } from 'react-native';

import MyScene from './MyScene';

export default class UseScene extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ title: 'My Initial Scene', index: 0 }}
        renderScene={(route, navigator) =>
          <MyScene
            title={route.title}

            // Function to call when a new scene should be displayed
            onForward={() => {    
              const nextIndex = route.index + 1;
              navigator.push({
                title: 'Scene ' + nextIndex,
                index: nextIndex,
              });
            }}

            // Function to call to go back to the previous scene
            onBack={() => {
              if (route.index > 0) {
                navigator.pop();
              }
            }}
          />
        }
      />
    )
  }
}