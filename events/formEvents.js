import { createEntries, getEntries, updateEntries } from '../api/vocabData';
import { showEntries } from '../pages/entries';

const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();

    // CLICK FOR ADDING AN ENTRY
    if (e.target.id.includes('submit-entry')) {
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        languageTech: document.querySelector('#language').value,
        uid: user.uid,
        time: new Date().toLocaleString(),
      };
      createEntries(payload).then(({ name }) => {
        const patchPayLoad = { firebaseKey: name };

        updateEntries(patchPayLoad).then(() => {
          getEntries(user.uid).then(showEntries);
        });
      });
    }

    // CLICK EVENT FOR EDITING AN ENTRY
    if (e.target.id.includes('update-entry')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        languageTech: document.querySelector('#language').value,
        firebaseKey,
        time: new Date().toLocaleString(),
      };
      updateEntries(payload).then(() => {
        getEntries(user.uid).then(showEntries);
      });
    }
  });
};

export default formEvents;
