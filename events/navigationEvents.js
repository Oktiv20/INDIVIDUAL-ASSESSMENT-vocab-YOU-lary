import { showEntries } from '../pages/entries';
import { signOut } from '../utils/auth';
import addEntryForm from '../components/forms/addEntryForm';
import {
  getEntries,
} from '../api/vocabData';

// navigation events
const navigationEvents = (user) => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // SHOW ENTRIES
  document.querySelector('#all-entries').addEventListener('click', () => {
    getEntries(user.uid).then(showEntries);
  });

  // CLICK EVENT FOR SHOWING FORM FOR ADDING AN ENTRY
  document.querySelector('#entries').addEventListener('click', () => {
    addEntryForm();
  });
};

export default navigationEvents;
