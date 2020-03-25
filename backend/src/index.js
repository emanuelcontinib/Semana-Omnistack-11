const express=require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333); 


 //rota raiz apenas a barra, sem endereço
/*
Métodos HTTP:
GET: Buscar informações do back
POST: Criar informações do back
PUT: Alterar uma informação do back
DELETE: Deletar uma informação no back
--------------------------------
TIPO DE PARÂRMETROS:
Query: Parametros nomeados enviados na rota após "?" (filtros, paginação)
ROUTE: Parâmetros utilizados para identificar recursos;
REQUEST BODY: Corpo da requisição, utilizado pra cirar ou alterar recursos;
--------------------------------
BANCOS:
SQL, SQLite, PostgreeSQL...
Driver: SELECT * FROM users
Query Builder: table ('users'). select ('*'). where ();
*/

 

