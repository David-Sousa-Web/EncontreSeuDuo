import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const primsa = new PrismaClient();

app.get('/games', (request, response) =>{
  return response.json([]);
});

app.post('/ads',(request, response) =>{
  return response.status(201).json([])
});

app.get('/games/:id/ads', (request, response) =>{
  //const gameid = request.parms.id

  return response.json([
    { id: 1, name: 'anuncio 1' },
    { id: 2, name: 'anuncio 2' },
    { id: 3, name: 'anuncio 3' }
  ])
});

app.get('/games/:id/discord', (request, response) =>{
  //const gameid = request.parms.id

  return response.json([])
});

//localhost:3333

app.listen(3333)