import client from '../utils/client';

const endpoint = client.databaseURL;

// GET ALL ENTRIES
const getEntries = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab_cards.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data))) // resolve(Object.values(data))) is sending back an array of objects (multiple things)
    .catch(reject);
});

// FIXME: CREATE ENTRY
const createEntries = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab_cards.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data)) // resolve(data)) is sending back one object
    .catch(reject);
});

export {
  getEntries,
  createEntries
};
