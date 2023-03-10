import renderToDOM from '../../utils/renderToDOM';

const domBuilder = () => {
  const domString = `
  <div id="navigation"></div>
  <div id="main-container">
    <div id="add-button"></div>
    <div id="form-container"></div>
    <div id="view" class="d-flex flex-wrap gap-3 justify-content-center"></div>
    <div id="main-page" class="d-flex flex-wrap gap-3 justify-content-center"></div>
  </div>`;

  renderToDOM('#app', domString);
};

export default domBuilder;
