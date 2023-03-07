import { showEntries } from '../pages/entries';
import { signOut } from '../utils/auth';
import addEntryForm from '../components/forms/addEntryForm';
import { getEntries } from '../api/vocabData';

// navigation events
const navigationEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // ALL ENTRIES
  document.querySelector('#all-entries').addEventListener('click', () => {
    getEntries().then(showEntries);
  });

  document.querySelector('#navigation').addEventListener('click', (e) => {
    // CLICK EVENT FOR SHOWING FORM FOR ADDING AN ENTRY
    if (e.target.id.includes('entries')) {
      console.warn('ADD ENTRY');
      addEntryForm();
    }
  });
};

export default navigationEvents;
