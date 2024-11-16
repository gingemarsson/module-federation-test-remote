import express from 'express';
import cors from 'cors';

const app = express();
const port = 8000;

app.use(cors())

const path = __dirname + "/../../dist/client";
app.use(express.static(path));

// API
app.get('/api/data', (req, res) => {
    res.send('[1,2,3,4,5,6]')
  })
  
app.listen(port, () => {
    console.log(`Example app listening @ http://localhost:${port}`);
});