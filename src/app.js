import fs from 'fs';
import express from 'express';
import cors from 'cors';
import Contenedor from "./clases/Contenedor.js";
import productRouter from './routes/product.js';
import upload from './services/uploader.js';
import {engine} from 'express-handlebars';

const app = express();
const PORT = process.env.PORT || 8080;
const contenedor = new Contenedor("productos.txt");

const server = app.listen(PORT,()=>{
  console.log("server escuchando en el port:",PORT)
})

app.engine('handlebars', engine())
app.set('views', './views');
app.set('views engine','handlebars')


app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extends:true}))
app.use((req,res,next)=>{
  console.log(new Date().toTimeString().split(" ")[0], req.method, req.url);
  next();
})
app.use(express.static('public'));
app.use('/api/product',productRouter);


app.post('/api/uploadfile',upload.fields([
  {
      name:'file', maxCount:1
  },
  {
      name:"documents", maxCount:3
  }
]),(req,res)=>{
  const files = req.files;
  console.log(files);
  if(!files||files.length===0){
      res.status(500).send({messsage:"No se subió archivo"})
  }
  res.send(files);
})
app.get('/views/product',(req,res)=>{
  contenedor.getAll().then(result=>{
      let info = result;
      let preparedObject ={
          product : info
      }
      res.render('product',preparedObject)
  })
})


