const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

/* Application/json parser */
var jsonParser = bodyParser.json();

/* Definitions */
const port = process.env.PORT || 5000;
const domain = `localhost:${port}`;

/* Port listening */
app.listen(port, () => {
  console.log(`Server running on ${domain}`);
});

/* Middlewares */
app.use(cors());
app.use(jsonParser);

/* Endpoints */
const passengers = require('./routes/api/passengers');
app.use('/api/passengers', passengers);
