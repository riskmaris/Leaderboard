// import './index.css';

// const mockScores = [
//   { user: 'Lameck', score: 1254 },
//   { user: 'bbbbbbb', score: 77 },
//   { user: 'Maris', score: 39 },
//   { user: 'Highest', score: 1000 },
//   { user: 'dsadad', score: 'dsadada' },
//   { user: 'Amin', score: 100 },
//   { user: 'Higher than highest', score: 1000000 },
//   { user: 'josh', score: 67 },
//   { user: 'babi', score: 40 },
//   { user: 'patrick', score: 100 },
// ];

// const getScores = async () => ({ result: mockScores });

// const displayScores = async () => {
//   const scores = await getScores();
//   const table = document.getElementById('table');
//   table.innerHTML = '';
//   scores.result.forEach(({ score, user }) => {
//     const tr = document.createElement('tr');
//     tr.innerHTML = `
//       <td>${user} : ${score}</td>
//     `;
//     table.appendChild(tr);
//   });
// };

// window.addEventListener('load', displayScores);

// // Add a new score
// const form = document.getElementById('form');
// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   // Get the user input
//   const user = document.getElementById('user').value;
//   const score = document.getElementById('score').value;
//   if (!user || !score) return;
//   mockScores.push({ user, score });
//   document.getElementById('user').value = '';
//   document.getElementById('score').value = '';
//   displayScores();
// });

// // Refresh the scores list
// const refresh = document.getElementById('refresh');
// refresh.addEventListener('click', displayScores);

import './index.css';

const BASE_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';
// const GAME_ID = 'Zl4d7IVkemOTTVg2fUdz';
const GAME_ID = 'Zl4d7IVkimOTTVg2fUdn';

const postScore = async (newScore) => {
  const response = await fetch(`${BASE_URL}/games/${GAME_ID}/scores/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newScore),
  });
  const data = await response.json();
  return data;
};

const getScores = async () => {
  const response = await fetch(`${BASE_URL}/games/${GAME_ID}/scores/`);
  const data = await response.json();
  return data;
};
const displayScores = async () => {
  const scores = await getScores();
  const table = document.getElementById('table');
  table.innerHTML = '';
  scores.result.forEach(({ score, user }) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${user} : ${score}</td>
    `;
    table.appendChild(tr);
  });
};

window.addEventListener('load', displayScores);

// Add a new score
const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  // Get the user input
  const user = document.getElementById('user').value;
  const score = document.getElementById('score').value;
  if (!user || !score) return;
  const newScore = {
    user,
    score,
  };
  postScore(newScore);
  displayScores();
  document.getElementById('user').value = '';
  document.getElementById('score').value = '';
});

// Refresh the scores list
const refresh = document.getElementById('refresh');
refresh.addEventListener('click', displayScores);