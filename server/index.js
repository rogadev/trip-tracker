const express = require('express');
const cors = require('cors');

const app = express();

/* Definitions */
const port = process.env.PORT || 5000;
const domain = `localhost:${port}`;

/* Port listening */
app.listen(port, () => {
  console.log(`Server running on ${domain}`);
});

/* Middlewares */
app.use(cors());
app.use(express.json());

/* Endpoints */
// const passengers = require('./routes/api/passengers');
// const login = require('./routes/api/v1/login/login');
// const newUser = require('./routes/api/v1/new/new');
// app.use('/api/passengers', passengers);
// app.use('/api/v1/login', login);
// app.use('/api/v1/new', newUser);
const test = require('./db/index');
app.use('/test', test);
