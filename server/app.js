const express = require('express');
const app = express();
const port = 80;

app.use(express.static('public'));


// Router

app.get('/', (req, res) => {

  const labasX20 = 'Labas '.repeat(120);

  res.send(labasX20);
});

//

app.listen(port, () => {
  console.log(`Klausomės porto Nr.: ${port}`);
});