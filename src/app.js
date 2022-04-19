const express = require(`express`);
const Contenedor = require("./clases/Contenedor");
const app = express();
const server = app.listen(8080,()=>{
  console.log("server escuchando en el port 8080")
})
const contenedor = new Contenedor("productos.txt");
const productRouter = require('./routes/product');
app.use(express.json());
app.use(express.urlencoded({extends:true}))

app.use('/api/product',productRouter);
