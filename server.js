const express = require (`express`);
const Contenedor = require(`./clases/contenedor.js`)

const app = express();

const PORT = process.env.PORT || 8080;

const contenedor = new Contenedor();


const server = app.listen(PORT,()=>{
  console.log(`Servidor escuchando en el puerto ${PORT}`)
})

server.on(`error`,(error)=>console.log(`Error en el servidor:`+error))

app.get(`/productos`,(req,res) => {
  Contenedor.getAll().then(result => {
    res.send(result.productos);
})})


app.get('/productoRandom', async (req, res) => {
  let cantidad= await productosContenedor.getAll().then(result => result.length)
  let productoRandom = await productosContenedor.getById(Math.floor(Math.random() * cantidad + 1))
  res.send(productoRandom)
})