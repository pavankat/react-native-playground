import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';

const heartIcon = require('./images/heart-icon.png');

export class ToggleButtonExample extends Component {
	state = {
		liked: true
	};

	_onPressBtn = () => {
		this.setState({
			liked: !this.state
		});
	};

	render() {
		const likedStyles = this.state.liked ? styles.liked : null;

		return (
			<View style={styles.container}>
				<TouchableHighlight 
					onPress={this._onPressBtn}
					style={styles.btn} 
					underlayColor="#fefefe">
					<Image 
						source={heartIcon} 
						style={[styles.icon, likedStyles]} 
					/>
				</TouchableHighlight>
				<Text style={styles.text}>
				  Do you like this app?
				</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	icon: {
		height: 180,
		width: 180,
		tintColor: '#f1f1f1'
	},
	container: {
		marginTop: 50,
		alignItems: 'center'
	},
	liked: {
		tintColor: '#e74c3c'
	},
	text: {
		marginTop: 20
	},
	btn: {
		borderRadius: 5,
		padding: 10
	}
});

export default ToggleButtonExample;