import express from 'express';

const app = express();
const port = 8000;

app.use(express.static('dist/client'));

app.listen(port, () => {
    console.log(`Example app listening @ http://localhost:${port}`);
});