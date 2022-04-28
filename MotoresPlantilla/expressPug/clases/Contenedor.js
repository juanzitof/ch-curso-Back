class Contenedor {
    constructor(name_file) {
      this.name_file = name_file;
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
            message: "Array vacío",
          };
        }
      } catch (err) {
        return { status: "error", message: "No se encontró el producto" };
      }
    }
  }
  
  export default Contenedor;