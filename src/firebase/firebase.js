import firebase from 'firebase/app'; // We only need app, not the entire firebase library.
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyCDXGa8mWpdTlsZFsbrx1oJfLdtTXxWZ_w',
	authDomain: 'clothing-19da9.firebaseapp.com',
	databaseURL: 'https://clothing-19da9.firebaseio.com',
	projectId: 'clothing-19da9',
	storageBucket: 'clothing-19da9.appspot.com',
	messagingSenderId: '269081985960',
	appId: '1:269081985960:web:992b7f0634acd9c920139d'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
	prompt: 'select_account'
});

export const signInWithGoogle = function() {
	return auth.signInWithPopup(provider);
};

export default firebase;
