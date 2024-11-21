const express = require('express');
const app = express();

const PORT = 3000

app.set('view engine', 'ejs');

//Middleware
app.use(express.urlencoded({ extended: true }));


const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb+srv://djsmacker01:Fabulous01@cluster0.amspanf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(client => {
         console.log('Connected to Database....')
        const db = client.db('star-wars-quotes')
        const quotesCollection = db.collection('quotes')
        
        app.get('/', (req, res) => {
            // const cursor = db.collection('quotes').find()
            // console.log(cursor)
            db.collection('quotes')
                .find()
                .toArray()
                .then(result => {
                    res.render('index.ejs', { quotes: result })
                    console.log(result);
                })
            .catch(err => console.error(err))
            // res.sendFile(__dirname + '/index.html');
        })
        
      
app.post('/quotes', (req, res) => { 
    console.log(req.body)
    quotesCollection
        .insertOne(req.body)
        .then(result => {
            res.redirect('/')
        console.log(result)
        })
    .catch(err => {console.error(err)});
})
        
app.listen(PORT, () => { 
    console.log(`Server is running at http://localhost:${PORT}`);
});
    }).catch (error=> console.error(error))




// console.log("server started");