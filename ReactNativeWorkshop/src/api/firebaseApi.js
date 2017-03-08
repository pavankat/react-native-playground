import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBRsZh-ORfVPkz_W5N1k892pSbYl4tmt2s",
  authDomain: "react-native-gify-tinder.firebaseapp.com",
  databaseURL: "https://react-native-gify-tinder.firebaseio.com",
  storageBucket: "react-native-gify-tinder.appspot.com",
  messagingSenderId: "543786304629"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);


/**
 * Create a user based on the username
 *
 * @param username
 */
export function createUser(username) {
  return firebaseApp.database().ref(`users/${username}`).set({
    username,
    likes: {}
  });
}

/**
 * Retrieve users gif likes based on username
 * 
 * @param username
 */
export function getLikes(username){
  return firebaseApp.database().ref(`users/${username}/likes`).once('value')
    .then((snapshot) => {
      return snapshot.val();
    });
}

/**
 * Like a gif for a user
 *
 * @param username
 * @param gif
 */
export function like(username, gif){
  return firebaseApp.database().ref(`users/${username}/likes/${gif.id}`).set(gif);
}
