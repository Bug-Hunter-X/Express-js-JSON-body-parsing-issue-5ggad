const express = require('express');
const app = express();
app.use(express.json());
app.post('/user', (req, res) => {
  console.log(req.body); // This will now correctly log the parsed JSON data
  res.send('User created');
});
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});