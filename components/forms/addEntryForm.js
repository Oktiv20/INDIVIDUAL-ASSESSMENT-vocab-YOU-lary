import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDOM';

const addEntryForm = (obj = {}) => {
  clearDom();
  const domString = ` 
  <form id="${obj.firebaseKey ? `update-author--${obj.firebaseKey}` : 'submit-author'}" class="mb-4">
  <div class="form-group">
    <label for="image">Title</label>
    <input type="text" class="form-control" id="title" placeholder="Title" value="${obj.title || ''}" required>
  </div>
  <div class="form-group">
    <label for="image">Definition</label>
    <input type="text" class="form-control" id="definition" placeholder="Definition" value="${obj.definition || ''}" required>
  </div>
  <div class="form-group">
    <label for="title">Language/Tech</label>
    <input type="email" class="form-control" id="email" aria-describedby="Email" placeholder="Language/Tech" value="${obj.languageTech || ''}" required>
  </div>
  <button type="submit" class="btn btn-primary mt-3">Submit Entry</button>
</form>`;

  renderToDOM('#form-container', domString);
};

export default addEntryForm;
