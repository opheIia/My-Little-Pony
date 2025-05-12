const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
app.use(express.static(path.join(__dirname, 'public')));
app.use('/views', express.static(path.join(__dirname, 'views')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});
app.get('/quiz', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'quiz.html'));
});
app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});