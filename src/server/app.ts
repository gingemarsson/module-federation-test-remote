import express from 'express';
import cors from 'cors';

const app = express();
const port = 8000;

app.use(cors())

const path = __dirname + "/../../dist/client";
app.use(express.static(path));

app.listen(port, () => {
    console.log(`Example app listening @ http://localhost:${port}`);
});