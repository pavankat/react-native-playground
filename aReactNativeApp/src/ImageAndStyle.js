import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';

//It's very important to explicitly require every image that we want to use, because, when we prepare our app for distribution, images will be added to the bundle automatically.

//It's a good practice to require the images outside of the component in order to only require them once, and then we can use them in our component.

//For remote images, we need to use an object defining the uri where our file is.

const bowtie = require('./images/kitten-bowtie.jpeg');
const hug = require('./images/kitten-hug.jpg');
const lookDown = require('./images/kitten-look-down.jpg');

//each component has a style property that leverages the StyleSheet api
//the StyleSheet api is very similar to css but it's not the same

//The source property of the Image accepts an object to load remote images or a reference to the required file. 

//this looks fine on an android but doesn't appear on ios
//this is because ios only takes in https images by default
// editing info.plist didn't work from this blog: http://blog.bigbinary.com/2016/07/27/open-non-https-sites-in-webview-in-react-native.html
const remoteImage = {
	uri: 'http://cdn3-www.cattime.com/assets/uploads/2011/08/best-kitten-names-1.jpg'
}

const ImageAndStyle = () => {
	const name = '01 - Hey, this is my life';

	return (
		<View style={styles.container}>
			<View style={styles.innerContainer} />
			<Text style={styles.title}>
				<Text style={styles.subtitle}>Playing:</Text> {name}
			</Text>

			<Image source={bowtie} style={styles.icon} />
			<Image source={hug} style={styles.icon} />
			<Image source={lookDown} style={styles.icon} />
			<Image source={remoteImage} style={styles.icon} />
		</View>
	);
};

const styles = StyleSheet.create({
	icon: {
		height: 100,
		width: 100,
		marginLeft: 5, 
		marginRight: 5
	},
	container: {
		margin: 10,
		marginTop: 100,
		backgroundColor: '#e67e22',
		borderRadius: 5
	},
	innerContainer: {
		backgroundColor: '#d35400',
		height: 50,
		width: 150, 
		borderTopLeftRadius: 5,
		borderBottomLeftRadius: 5
	},
	title: {
		fontSize: 18,
		fontWeight: '200',
		color: '#fff',
		position: 'absolute',
		backgroundColor: 'transparent',
		top: 12,
		left: 10
	},
	subtitle: {
		fontWeight: 'bold'
	}
});

export default ImageAndStyle;