import loginButton from '../components/buttons/loginButton';
import renderToDOM from '../utils/renderToDOM';

const homePage = () => {
  document.querySelector('#app').innerHTML = '';
  const domString = `
  <h1 id="display-3">WELCOME TO VOCAB-YOU-LARY</h1>
  <br>
  <h3 id="display-4">SIGN IN TO GET STARTED!</h3>
  <br>
  <div id="login-button"></div>
  `;
  renderToDOM('#app', domString);
  loginButton();
};

export default homePage;
