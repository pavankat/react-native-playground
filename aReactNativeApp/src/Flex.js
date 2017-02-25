/* THIS DOES NOT WORK and is from the React Native Documentation: https://facebook.github.io/react-native/docs/height-and-width.html#content 

I posted this issue for react-native: https://github.com/facebook/react-native/issues/12518
*/



// Use flex in a component's style to have the component expand and shrink dynamically based on available space. 

//Normally you will use flex: 1, which tells a component to fill all available space, shared evenly amongst each other component with the same parent. The larger the flex given, the higher the ratio of space a component will take compared to its siblings.

// A component can only expand to fill available space if its parent has dimensions greater than 0. If a parent does not have either a fixed width and height or flex, the parent will have dimensions of 0 and the flex children will not be visible.

import React, { Component } from 'react';
import { View } from 'react-native';

class Flex extends Component {
	render() {
	  return (
	  	//flex: 1 doesn't show anything:
		    // Try removing the `flex: 1` on the parent View.
		    // The parent will not have dimensions, so the children can't expand.

	    //it shows up when I do this:
		    // What if you add `height: 300` instead of `flex: 1`?
	    <View style={{flex: 1}}>
	      <View style={{flex: 1, backgroundColor: 'powderblue'}} />
	      <View style={{flex: 2, backgroundColor: 'skyblue'}} />
	      <View style={{flex: 3, backgroundColor: 'steelblue'}} />
	    </View>
	  );
	}
};

export default Flex;