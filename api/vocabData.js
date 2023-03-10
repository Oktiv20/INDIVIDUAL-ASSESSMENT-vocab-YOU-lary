import client from '../utils/client';

const endpoint = client.databaseURL;

// GET ALL ENTRIES
const getEntries = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab_cards.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

// CREATE ENTRY
const createEntries = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab_cards.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// UPDATE ENTRY
const updateEntries = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab_cards/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

// GET SINGLE ENTRY
const getSingleEntry = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab_cards/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data)) // will resolve a single object
    .catch(reject);
});

// DELETE ENTRY
const deleteEntry = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab_cards/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// FILTER ENTRY

const getJavaScriptEntries = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab_cards.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const js = Object.values(data).filter((obj) => obj.languageTech === 'JavaScript');
      resolve(js);
    })
    .catch(reject);
});

const getHTMLEntries = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab_cards.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const html = Object.values(data).filter((obj) => obj.languageTech === 'HTML');
      resolve(html);
    })
    .catch(reject);
});

const getCSSEntires = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab_cards.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const css = Object.values(data).filter((obj) => obj.languageTech === 'CSS');
      resolve(css);
    })
    .catch(reject);
});

const getReactJSEntries = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab_cards.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const js = Object.values(data).filter((obj) => obj.languageTech === 'ReactJS');
      resolve(js);
    })
    .catch(reject);
});

export {
  getEntries,
  createEntries,
  updateEntries,
  getSingleEntry,
  deleteEntry,
  getHTMLEntries,
  getCSSEntires,
  getJavaScriptEntries,
  getReactJSEntries
};
