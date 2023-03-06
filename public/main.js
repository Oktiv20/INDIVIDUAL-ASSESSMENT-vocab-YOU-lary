// USE WITH FIREBASE AUTH
import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';

const init = () => {
  // document.querySelector('#app').innerHTML = `
  // <h1>Welcome to Vocab-YOU-lary!</h1>
  // <small>Login to get started</small><br />
  // <hr />
  // `;
  // console.warn('YOU ARE UP AND RUNNING!');

  // document
  //   .querySelector('#click-me')
  //   .addEventListener('click', () => console.warn('You clicked that button!'));

  // USE WITH FIREBASE AUTH
  ViewDirectorBasedOnUserAuthStatus();
};

init();

/* <h2>These are font awesome icons:</h2>
<i class="fas fa-user fa-4x"></i> <i class="fab fa-github-square fa-5x"></i> */
