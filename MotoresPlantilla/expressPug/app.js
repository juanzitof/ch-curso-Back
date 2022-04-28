import express from 'express';
import contenedor from './clases/Contenedor.js'
const app = express();
const PORT = process.env.PORT || 8080;


const server = app.listen(PORT,()=>{
  console.log("server escuchando en el port:",PORT)
})

app.set('views','/views')
app.set('views engine','pug')

app.use(express.static('public'));

app.get('/views/product',(req,res)=>{
  contenedor.getAll().then(result=>{
      let info = result;
      res.render('products.pug',{productArray:info})
  })
})
  