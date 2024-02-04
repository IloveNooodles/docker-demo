const express = require('express');
const app = express();
const port = process.env.PORT || 9999;

app.get('/', (req, res) => {
  res.send('Hello from Docker!');
});

app.get('/:name', (req, res) => {
  const name = req.params.name;
  res.send(`Hello, ${name} Good night!`);
});

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});
