// There are two types of data that control a component: props and state. props are set by the parent and they are fixed throughout the lifetime of a component. 

//For data that is going to change, we have to use state.

// In general, you should initialize state in the constructor, and then call setState when you want to change it.

// For example, let's say we want to make text that blinks all the time. The text itself gets set once when the blinking component gets created, so the text itself is a prop. The "whether the text is currently on or off" changes over time, so that should be kept in state.

// In a real application, you probably won't be setting state with a timer. 

//You might set state when you have 
	//new data arrive from the server, 
	//or from user input. 

	//You can also use a state container like Redux to control your data flow. 
		//In that case you would use Redux to modify your state rather than calling setState directly.

// State works the same way as it does in React, so for more details on handling state, you can look at the React.Component API.

import React, { Component } from 'react';
import { Text, View } from 'react-native';

class State extends Component {
  constructor(props) {
    super(props);
    this.state = {showText: true};

    // Toggle the state every second
    setInterval(() => {
      this.setState({ showText: !this.state.showText });
    }, 1000);
  }

  render() {
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}

class StateApp extends Component {
  render() {
    return (
      <View>
        <State text='I love to blink' />
        <State text='Yes blinking is so great' />
        <State text='Why did they ever take this out of HTML' />
        <State text='Look at me look at me look at me' />
      </View>
    );
  }
}

export default StateApp;