import { showEntries } from '../pages/entries';
import { signOut } from '../utils/auth';
import addEntryForm from '../components/forms/addEntryForm';
import {
  getEntries,
} from '../api/vocabData';

// navigation events
const navigationEvents = (user) => {
  // CLICK FOR LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // CLICK FOR SHOW ENTRIES
  document.querySelector('#all-entries').addEventListener('click', () => {
    getEntries(user.uid).then(showEntries);
  });

  // CLICK FOR SHOWING ADD ENTRY FORM
  document.querySelector('#entries').addEventListener('click', () => {
    addEntryForm();
  });

  // STRETCH: SEARCH
  document.querySelector('#search').addEventListener('keyup', (e) => {
    const searchValue = document.querySelector('#search').value;

    if (e.keyCode === 13) {
      getEntries(user.uid).then((data) => data.filter((index) => index.title.toLowerCase().includes(searchValue)
        || index.languageTech.toLowerCase().includes(searchValue))).then(showEntries);
      document.querySelector('#search').value = '';
    }
  });
};

export default navigationEvents;
