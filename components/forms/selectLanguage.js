// import { getLanguageTech } from '../../api/languageData';
// import renderToDOM from '../../utils/renderToDOM';

// const selectLanguageTech = (user, techId) => {
//   let domString = `<label for="languageTech">Select a Language/Tech</label>
//     <select class="form-control" id="tech_id" required>
//     <option value="">Select a Language/Tech</option>`;

//   getLanguageTech(user).then((languageTechArray) => {
//     languageTechArray.forEach((languageTech) => {
//       domString += `
//           <option
//             value="${languageTech.firebaseKey}"
//             ${techId === languageTech.firebaseKey ? 'selected' : ''}>
//               ${languageTech.languageTech}
//           </option>`;
//     });

//     domString += '</select>';

//     renderToDOM('#select-languageTech', domString);
//   });
// };

// export default selectLanguageTech;
