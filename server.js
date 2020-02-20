var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');

	var app = express();

		app.use(function(req, res) {
			res.setHeader('Acess-Conttrol-Allow-Origin', '*');
			res.setHeader('Acess-Control-Allow-Method', 'GET, POST, PUT, DELETE');
			res.setHeader('Content-Type','application/json');
			res.setHeader('Acess-Conttrol-Allow-Credentials', true);
			res.end();

		})
			app.listen(3000, function(){

				console.log('Servidor web rodando na porta  3000');
			})
