import './index.css';

const mockScores = [
  { user: 'Lameck', score: 1254 },
  { user: 'bbbbbbb', score: 77 },
  { user: 'maris', score: 39 },
  { user: 'Highest', score: 1000 },
  { user: 'dsadad', score: 'dsadada' },
  { user: 'Amin', score: 100 },
  { user: 'Higher than highest', score: 1000000 },
  { user: 'josh', score: 67 },
  { user: 'babi', score: 40 },
  { user: 'patrick', score: 100 },
];

const getScores = async () => ({ result: mockScores });

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
  mockScores.push({ user, score });
  document.getElementById('user').value = '';
  document.getElementById('score').value = '';
  displayScores();
});

// Refresh the scores list
const refresh = document.getElementById('refresh');
refresh.addEventListener('click', displayScores);
