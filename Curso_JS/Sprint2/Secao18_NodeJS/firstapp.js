let express = require('express');
const { argv } = require('process');
let app = express();

app.get('/', function(req, res) {
    res.send('Primeira rota com Express');
});

app.get('/testando', function(req, res) {
    res.send('testando a outra rota criada');
});

app.listen(3000, function() {
    console.log(`Rodando na porta ${arguments[0]}`)
})