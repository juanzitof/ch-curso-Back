import express from "express";
import Contenedor from "./clases/Contenedor.js";
import upload from "./services/uploader.js";

const router = express.Router();
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

router.post("/", upload.single("image"), (req, res) => {
  let file = req.file;
  let product = req.body;
  product.thumbnail =
    req.protocol + "://" + req.hostname + ":8080" + "/images" + file.filename;
  contenedor.registerProduct(product).then((result) => {
    res.send(result);
  });
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
router.delete("/:pid", (req, res) => {
  let id = parseInt(req.params.pid);
  contenedor.deleteById(id).then((result) => {
    res.send(result);
  });
});

export default router;