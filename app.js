const Contenedor = require("./clases/Contenedor");

const contenedor = new Contenedor("productos.txt");

contenedor.getById(5).then((result) => {
  console.log(result.product, result.message);
});

contenedor.getAll().then((result) => {
  console.log(result.product, result.message);
});

contenedor.deleteById(3).then((result) => {
  console.log(result.message);
});

contenedor.deleteAll().then((result) => {
  console.log(result.message);
});