class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.libros = [];
      this.mascotas = [];
    }
  
    getFullName() {
      return `Mi nombre es ${this.nombre} ${this.apellido}`;
    }
  
    addMascotas(nombreMascota) {
      return this.mascotas.push(nombreMascota);
    }
  
    countMascotas() {
      return this.mascotas.length;
    }
  
    addBookk(nombre, autor) {
      return this.libros.push({
        nombre: nombre,
        autor: autor,
      });
    }
    getBookName() {
      return this.libros.map((libro) => libro.nombre);
    }
  }
  
  const usuario_uno = new Usuario("Jhon", "Wick");
  
  getFullName();
  
  usuario_uno.addMascotas("firulais");
  
  usuario_uno.countMascotas();
  
  usuario_uno.addBookk({ nombre: "Harry Poter", autor: "Rowling.J.K" });
  
  usuario_uno.getBookName();