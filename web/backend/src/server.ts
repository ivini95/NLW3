import express, { query } from 'express';
import './database/connection';

import routes from './routes'

const app = express();

app.use(express.json());
app.use(routes);
//Rota = conjunto 
//Resurso = usuario
//metodos HTTP = GET, PUST, PUT, DELETE
//parâmetros

//GET = buscando informação
//POST = criando uma informação
//PUT = Editando uma informação
//DELETE = Deletando uma informação

// Query: http://localhost:3333/users?search=diego
// Route Params: http://localhost:3333/users/1 (Identificar um recurso)
// Body : http://localhost:3333/users


app.listen(3333);
