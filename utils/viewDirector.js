import firebase from 'firebase/app';
import 'firebase/auth';
// import loginButton from '../components/buttons/loginButton';
import homePage from '../pages/homepage';
import client from './client';
import startApp from './startApp';

const ViewDirectorBasedOnUserAuthStatus = () => {
  firebase.initializeApp(client);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      startApp(user);
    } else {
      homePage();
    }
  });
};

export default ViewDirectorBasedOnUserAuthStatus;
