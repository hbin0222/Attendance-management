const express = require('express');
const app = express();
const port = 3000
const cors = require('cors')
app.use(cors());

app.get('/', (req, res) => {
    res.send('hello world');
})

app.get('/dog', (req, res) => {
    res.send({'sound': "멍멍"});
})

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})