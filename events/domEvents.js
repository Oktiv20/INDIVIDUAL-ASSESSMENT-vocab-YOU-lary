import {
  deleteEntry, getCSSEntires, getEntries, getHTMLEntries, getJavaScriptEntries, getReactJSEntries, getSingleEntry
} from '../api/vocabData';
import addEntryForm from '../components/forms/addEntryForm';
import { showEntries } from '../pages/entries';

function domEvents(user) {
  document.querySelector('#main-page').addEventListener('click', (e) => {
    // CLICK FOR SHOWING ADD ENTRY FORM
    if (e.target.id.includes('entries')) {
      addEntryForm(user.uid);
    }

    // CLICK FOR EDITING/UPDATING AN ENTRY
    if (e.target.id.includes('edit-entry-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleEntry(firebaseKey).then((entryObj) => addEntryForm(entryObj));
    }

    if (e.target.id.includes('delete-entry')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteEntry(firebaseKey).then(() => {
          getEntries(user.uid).then(showEntries);
        });
      }
    }
  });

  // CLICK FOR FILTER BUTTONS
  document.querySelector('#view').addEventListener('click', () => {
    document.querySelector('#html-btn').addEventListener('click', () => {
      getHTMLEntries(user.uid).then(showEntries);
    });

    document.querySelector('#css-btn').addEventListener('click', () => {
      getCSSEntires(user.uid).then(showEntries);
    });

    document.querySelector('#javascript-btn').addEventListener('click', () => {
      getJavaScriptEntries(user.uid).then(showEntries);
    });

    document.querySelector('#reactjs-btn').addEventListener('click', () => {
      getReactJSEntries(user.uid).then(showEntries);
    });
  });
}

export default domEvents;
