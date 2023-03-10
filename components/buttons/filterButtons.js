import renderToDOM from '../../utils/renderToDOM';

const filterButtons = () => {
  const domString = `
  <button class="btn btn-primary btn-lg mb-4" id="javascript-btn">JavaScript</button>
  <button class="btn btn-primary btn-lg mb-4" id="html-btn">HTML</button>
  <button class="btn btn-primary btn-lg mb-4" id="css-btn">CSS</button>
  <button class="btn btn-primary btn-lg mb-4" id="reactjs-btn">ReactJS</button>
  `;

  renderToDOM('#view', domString);
};

export default filterButtons;
