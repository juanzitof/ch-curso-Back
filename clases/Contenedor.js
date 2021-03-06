const fs = require("fs");

class Contenedor {
  constructor(name_file) {
    this.name_file = name_file;
  }
  async save(product) {
    try {
      let data = await fs.promises.readFile(
        `./files/${this.name_file}`,
        "utf-8"
      );
      let products = JSON.parse(data);
      if (products.some((prod) => prod.title === product.title)) {
        return {
          status: "error",
          message: "Producto existente con ese nombre",
        };
      } else {
        let dataProd = {
          title: product.title,
          price: product.price,
          thumbnail: product.thumbnail,
          id: products.length + 1,
        };
        products.push(dataProd);
        try {
          await fs.promises.writeFile(
            `./files/${this.name_file}`,
            JSON.stringify(products, null, 2)
          );
          return { status: "success", message: "Producto creado exitosamente" };
        } catch (err) {
          return { status: "success", message: "No se pudo crear el evento" };
        }
      }
    } catch {
      let dataProd = {
        title: product.title,
        price: product.price,
        thumbnail: product.thumbnail,
        id: 1,
      };
      try {
        //si no existe lo crea
        await fs.promises.writeFile(
          `./files/${this.name_file}`,
          JSON.stringify([dataProd], null, 2)
        );
        return { status: "success", message: "Producto creado con exito" };
      } catch (error) {
        return {
          status: "error",
          message: "No se pudo crear el producto" + error,
        };
      }
    }
  }

  async getById(id) {
    try {
      let data = await fs.promises.readFile(
        `./files/${this.name_file}`,
        "utf-8"
      );
      let products = JSON.parse(data);
      let product = products.find((prod) => prod.id === id);
      if (product) {
        return { status: "success", product: product, message: "Se encontrĂ³" };
      } else {
        return {
          status: "error",
          product: null,
          message: "no se encuentra ese producto",
        };
      }
    } catch (err) {
      return { status: "error", message: "No se encontrĂ³ el producto" };
    }
  }

  async getAll() {
    try {
      let data = await fs.promises.readFile(
        `./files/${this.name_file}`,
        "utf-8"
      );
      let products = JSON.parse(data);
      let product = products.map((prod) => prod);
      if (product) {
        return {
          status: "success",
          product: product,
          message: "Estos son los productos",
        };
      } else {
        return {
          status: "error",
          product: null,
          message: "Array vacĂ­o",
        };
      }
    } catch (err) {
      return { status: "error", message: "No se encontrĂ³ el producto" };
    }
  }

  async deleteById(id) {
    try {
      let data = await fs.promises.readFile(
        `./files/${this.name_file}`,
        "utf-8"
      );
      let products = JSON.parse(data);
      let item = products.findIndex((prod) => prod.id === id);
      if (item != -1) {
        products.splice(item, 1);
      } else {
        return { status: "error", message: "ID no existe" };
      }
      try {
        await fs.promises.writeFile(
          `./files/${this.name_file}`,
          JSON.stringify(products, null, 2)
        );
        return { status: "success", message: "Producto eliminado con exito" };
      } catch (error) {
        return {
          status: "error",
          message: "No se pudo eliminar el producto" + error,
        };
      }
    } catch (err) {
      return { status: "error", message: "No se encontrĂ³ la id" };
    }
  }

  async deleteAll() {
    try {
      let data = await fs.promises.readFile(
        `./files/${this.name_file}`,
        "utf-8"
      );
      let products = JSON.parse(data);
      products = [];
      try {
        await fs.promises.writeFile(
          `./files/${this.name_file}`,
          JSON.stringify(products, null, 2)
        );
        return { status: "success", message: "Productos eliminados con exito" };
      } catch (error) {
        return {
          status: "error",
          message: "No se pudo eliminar el producto" + error,
        };
      }
    } catch (err) {
      return { status: "error", message: "No se pudo leer" };
    }
  }
}
module.exports = Contenedor;