const express = require('express');
const app = express();
const port = 3000;

const data = [
  { type: 'movie', title: 'Inception' },
  { type: 'movie', title: 'The Dark Knight' },
  { type: 'tv-show', title: 'Friends' },
  { type: 'tv-show', title: 'Breaking Bad' },
  { type: 'app', title: 'Game App' },
  { type: 'game', title: 'Adventure Game' }
];

app.use(express.static('public'));

app.get('/search', (req, res) => {
  const query = req.query.query.toLowerCase();
  const results = data.filter(item => item.title.toLowerCase().includes(query));
  res.json(results);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
