const express = require (`express`);
const router = express.Router();
const Contenedor = require ("../clases/Contenedor");
const contenedor = new Contenedor();


//GETS
router.get(`/`, (req, res) => {
  contenedor.getAll().then((result) => {
    res.send(result);
  });
});

router.get("/:id", (req, res) => {
  let id = parseInt(req.params.pid);
  contenedor.getById(id).then((result) => {
    res.send(result);
  });
});

//POSTS
router.post("/", (req, res) => {
  let product = req.body;
    contenedor.registerProduct(product).then(result=>{
        res.send(result);
    })
  });

//PUTS
router.put("/:pid", (req, res) => {
  let body = req.body;
  let id = parseInt(req.params.pid);
  contenedor.updateProduct(id, body).then((result) => {
    res.send(result);
  });
});

//DELETES
router.delete('/:pid',(req,res)=>{
  let id= parseInt(req.params.pid);
  contenedor.deleteById(id).then(result=>{
      res.send(result)
  });
});

module.exports = router();