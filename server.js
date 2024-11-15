const express = require('express');
const app = express();

const PORT = 3000

//Middleware
app.use(express.urlencoded({ extended: true }));


const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb+srv://djsmacker01:Fabulous01@cluster0.amspanf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(client => {
         console.log('Connected to Database....')
         const db  = client.db('star-wars-quotes')
    }
   
)
// .catch (error=> console.error(error))



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