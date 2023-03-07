import addEntryForm from '../components/forms/addEntryForm';

function domEvents() {
  document.querySelector('#navbar').addEventListener('click', (e) => {
  // CLICK EVENT FOR SHOWING FORM FOR ADDING AN ENTRY
    if (e.target.id.includes('add-entry-btn')) {
      console.warn('ADD ENTRY');
      addEntryForm();
    }
  });
}

export default domEvents;
