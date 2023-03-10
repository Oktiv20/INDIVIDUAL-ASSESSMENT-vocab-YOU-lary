// USE WITH FIREBASE AUTH
import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';

const init = () => {
  ViewDirectorBasedOnUserAuthStatus();
};

init();

/* <h2>These are font awesome icons:</h2>
<i class="fas fa-user fa-4x"></i> <i class="fab fa-github-square fa-5x"></i> */
