const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

/* Port listening */
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

/* Middlewares */
app.use(cors());

/* Endpoints */
const rides = require('./routes/api/rides');
app.use('/api/rides', rides);
