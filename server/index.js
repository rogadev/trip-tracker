import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;
const posts = express.Router()

/* Middleware */
app.use(cors());

/* Routes */
posts.get('/', (req, res) => {
  res.send('works');
});

app.use('/api/posts', posts);

app.listen(port, () => {
    console.log(`Server running on ${port}`);

});