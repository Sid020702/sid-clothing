import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();
firestore.collection('users').doc('AHP1aauKxHMrbRGM4MwJ').collection('cartItems').doc('3OWHdFbfU2LOnF9YxIIN');
firestore.doc('users/AHP1aauKxHMrbRGM4MwJ/cartItems/3OWHdFbfU2LOnF9YxIIN');
firestore.collection('users/AHP1aauKxHMrbRGM4MwJ/cartItems');