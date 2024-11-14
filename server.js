const express = require('express');
const app = express();

const PORT = 3000

//Middleware
app.use(express.urlencoded({ extended: true }));


const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb-connection-string', (err, client) => {
    
})


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})



app.post('/quotes', (req, res) => { 
    console.log(req.body)
})
app.listen(PORT, () => { 
    console.log(`Server is running at http://localhost:${PORT}`);
});
// console.log("server started");