// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyDcU8HgAk_aX6GrbozhZFYROkSuy0fqQWE',
	authDomain: 'fir-reactlivechat.firebaseapp.com',
	projectId: 'fir-reactlivechat',
	storageBucket: 'fir-reactlivechat.appspot.com',
	messagingSenderId: '714120994472',
	appId: '1:714120994472:web:bd513e8d04b3ecd312ac9d',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
