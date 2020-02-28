var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');

	var app = express();

		app.use(function(req, res, next) {
			res.setHeader('Acess-Conttrol-Allow-Origin', '*');
			res.setHeader('Acess-Control-Allow-Method', 'GET, POST, PUT, DELETE');
			res.setHeader('Content-Type','application/json');
			res.setHeader('Acess-Conttrol-Allow-Credentials', true);
			next();

		})
			app.use(bodyParser.urlencoded({ extended: false}
		))
			//parse application/json
			app.use(bodyParser.json())

			app.listen(3000, function(){

				console.log('Servidor web rodando na porta  3000');
			})

			//busca de usuarios
			app.get('/api', function(req, res){
				fs.readFile('usuarios.json', 'utf8', function(err, data){

					if(err){
						var response = {status: 'falha', 'resultado': err}
						res.json(response);
					} else{
						var obj = JSON.parse(data);
						var result = [];

						if(typeof req.query.usuario_id !== 'undefined'){

							obj.usuarios.forEach(function(usuario){

								if(usuario.usuario_id ==  req.query.usuario_id){

									result = usuario;

								}
							});

					}else {
							result = obj.usuarios;
						}


							var response = {status: 'usuario', 'resultado': result};
							res.json(response);

					}

				});
			});
			app.post('/api', function(req, res){
				fs.readFile('usuarios.json','utf8', function(err, data){
					if(err){
						var response =  {status: 'falha', resultado:err}
					}
					else{
					   var obj = JSON.parse(data);
					  //implementa  id automaticamente
					  req.body.usuario_id = obj.
					  usuarios.length  + 1
					  obj.usuarios.push(req.body);


					  fs.writteFile('usuarios.json'),
					  JSON.stringify(obj), function(err){

							if(err){
								var response = {status :'falha', resultado: err}
								res.json(response);
							}

						}
					}
				});
			});



