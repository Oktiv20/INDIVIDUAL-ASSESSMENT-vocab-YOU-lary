import filterButtons from '../components/buttons/filterButtons';
import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDOM';

const emptyEntries = () => {
  const domString = '<h1>No Entries</h1>';
  renderToDOM('#main-page', domString);
};

const showEntries = (array) => {
  clearDom();
  filterButtons();

  let domString = '';
  array.forEach((item) => {
    domString += `
      <div class="card">
        <div class="card-body" style="height: 50%;">
          <h2 class="card-title">${item.title}</h2>
          <hr>
          <h4 class="card-language">Category: ${item.languageTech}</h4>
          <br>
          <p class="card-definition">${item.definition}</p>
          <br>
            <hr>
            <i id="edit-entry-btn--${item.firebaseKey}" class="btn btn-warning">EDIT</i>
            <i id="delete-entry-btn--${item.firebaseKey}" class="btn btn-danger">DELETE</i>
        </div>
        <div class="card-footer">Created: ${item.time}</div>
      </div>`;
  });
  renderToDOM('#main-page', domString);
};

export { showEntries, emptyEntries };
