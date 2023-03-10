import { getEntries } from '../api/vocabData';
import filterButtons from '../components/buttons/filterButtons';
import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import navigationEvents from '../events/navigationEvents';
import { showEntries } from '../pages/entries';

const startApp = (user) => {
  domBuilder();
  domEvents(user);
  formEvents(user);
  filterButtons(user);
  navBar();
  logoutButton();
  navigationEvents(user);
  getEntries(user.uid).then(showEntries);
};

export default startApp;
