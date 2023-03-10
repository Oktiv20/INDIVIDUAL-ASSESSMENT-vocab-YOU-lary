import loginButton from '../components/buttons/loginButton';
import renderToDOM from '../utils/renderToDOM';

const homePage = () => {
  document.querySelector('#app').innerHTML = '';
  const domString = `
  <h1 id="display-3">WELCOME TO VOCAB-YOU-LARY</h1>
  <h2 id="display-3">SIGN IN TO GET STARTED!</h2>
  <div id="login-button"></div>
  `;
  renderToDOM('#app', domString);
  loginButton();
};

export default homePage;
