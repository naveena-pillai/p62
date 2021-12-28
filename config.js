import firebase from 'firebase';

//initialize your database
const firebaseConfig = {
  apiKey: 'AIzaSyBWViEQZ9MUPFTUlj85iCChPQqGgCRen44',
  authDomain: 'attendance-5a301.firebaseapp.com',
  databaseURL: 'https://attendance-5a301-default-rtdb.firebaseio.com',
  projectId: 'attendance-5a301',
  storageBucket: 'attendance-5a301.appspot.com',
  messagingSenderId: '651645935592',
  appId: '1:651645935592:web:1b47f3a5034e3105704e5d',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase.database();
