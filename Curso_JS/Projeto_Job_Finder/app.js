const express    = require('express');
const app    = express();
const db     = require('./db/connection')
const bodyParser    = require('body-parser');

const PORT = 3000; // constante

app.listen(PORT, function() {
    console.log(`listening on port ${PORT}`);
});

//body-parser
app.use(bodyParser.urlencoded({extended: false}));


// sqlite
db
    .authenticate()
    .then(() => {
        console.log("Conectou com sucesso")
    })
    .catch(err => {
        console.log("CONEXÃO DEU ERRO",err)
    });
// routes
app.get('/', (req, res) => {
    res.send('rota31aaaaaaaaaaa32');
});

// jobs routes
app.use('/jobs',require('./routes/jobs'));