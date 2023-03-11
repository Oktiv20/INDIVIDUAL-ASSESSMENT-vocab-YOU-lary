// import clearDom from '../utils/clearDom';
// import renderToDOM from '../utils/renderToDOM';

// const emptyLanguageTech = () => {
//   const domString = '<h1>No Languages</h1>';
//   renderToDOM('#main-page', domString);
// };

// const showLanguageTech = (array) => {
//   clearDom();

//   const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-language-btn">Add A Language/Tech</button>';
//   renderToDOM('#view', btnString);

//   let domString = '';
//   array.forEach((item) => {
//     domString += `
//     <div class="card" style="width: 18rem;">
//       <div class="card-body">
//         <h5 class="card-title">${item.languageTech}</h5>
//         <hr>
//         <i class="btn btn-warning" id="update-languageTech--${item.firebaseKey}"></i>
//         <i class="btn btn-danger" id="delete-languageTech-btn--${item.firebaseKey}"></i>
//       </div>
//     </div>
//     `;
//   });
//   renderToDOM('#main-page', domString);
// };

// export { showLanguageTech, emptyLanguageTech };
