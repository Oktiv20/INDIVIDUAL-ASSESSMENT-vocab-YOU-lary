import { showEntries } from '../pages/entries';
import { signOut } from '../utils/auth';
import addEntryForm from '../components/forms/addEntryForm';
import {
  getEntries,
} from '../api/vocabData';

// navigation events
const navigationEvents = (user) => {
  //  CLICK FOR LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  //  CLICK FOR SHOW ENTRIES
  document.querySelector('#all-entries').addEventListener('click', () => {
    getEntries(user.uid).then(showEntries);
  });

  // CLICK FOR SHOWING ADD ENTRY FORM
  document.querySelector('#entries').addEventListener('click', () => {
    addEntryForm();
  });
};

export default navigationEvents;
