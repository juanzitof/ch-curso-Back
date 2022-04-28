import express from 'express';
import contenedor from './clases/Contenedor.js';
const app = express();
const PORT = process.env.PORT || 8080;


const server = app.listen(PORT,()=>{
  console.log("server escuchando en el port:",PORT)
})

app.set('views engine','ejs')

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extends:true}))


app.get('/views/product',(req,res)=>{
  contenedor.getAll().then(result=>{
      let info = result;
      res.render('products.ejs',)
  })
})