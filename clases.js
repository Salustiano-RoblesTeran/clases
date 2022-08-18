class Usuario {
    constructor (nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
        let mascotas = [];
        let libros = [{}];
    }

    getFullName () {
        console.log(`${this.nombre} ${this.apellido}`);
    }
    
    addMascotas (mascota) {
        mascotas.push(mascota);
    }

}


const nuevoUsuario = new Usuario("Salu", "Robles Teran");

nuevoUsuario.getFullName();

nuevoUsuario.addMascotas("Perro");

console.log(mascotas);

