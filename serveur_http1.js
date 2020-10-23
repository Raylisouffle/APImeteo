var express = require('express');
var app = express();
cors = require('cors');
app.use(cors());
let fichierJson = {prenom : "toto", age : 21, ville : "Dunkerque"};
app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end('Vous êtes à l\'accueil de l\' API');
});
app.get('/sous-sol', function(req, res) {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end('Vous êtes dans la cave à vins, ces bouteilles sont à moi !');
});
app.get('/etage/:etagenum/chambre', function(req, res) {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end('Vous êtes à la chambre de l\'étage n°' + req.params.etagenum);
});

app.get('/json', function(req, res){
    res.setHeader('Content-Type', 'json; charset=utf-8');
    res.end(JSON.stringify(fichierJson));
});

app.get('/json/:var', function(req, res){
    res.setHeader('Content-Type', 'json; charset=utf-8');
    res.end(JSON.stringify(fichierJson[req.params.var]));
});

app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.send(404, "Page introuvable");
});
app.listen(8080);