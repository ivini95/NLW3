import express from 'express';
import path from 'path';
import cors from 'cors';

import 'express-async-errors';

import './database/connection';

import routes from './routes';
import errorHandler from './errors/handler';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler);
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
