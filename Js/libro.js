
class Libro{
    // titulo (string), autor (string), añoPublicacion (número) y genero (string)
    constructor(titulo, autor, añoPublicacion, genero){
        this.titulo=titulo;
        this.autor = autor;
        this.añoPublicacion = añoPublicacion;
        this.genero =genero;
    }

    info(){
        return `Titulo ${this.titulo}, autor: ${this.autor}, año de publicación ${this.añoPublicacion}, género: ${this.genero}`;
    }
}



let libro1 = new Libro(`El principito`, `Antoine de Saint-Exupéry`, 1943, `Literatura infantil`);
let libro2 = new Libro(`Rayuela`, `Julio Cortázar`, 1963, `Ficción contemporánea`);
let libro3 = new Libro(`El Aleph`, `Jorge Luis Borges`, 1945, `cuentos`);
let biblioteca = [libro1, libro2, libro3];

// implementa una función buscarLibrosPorAutor que reciba como parámetro el nombre de un autor (string) y devuelva un arreglo con los libros escritos por ese autor.

function buscarLibrosPorAutor(autor){
    let librosDeAutor = [];
    for(let libro of biblioteca){
        if(libro.autor === autor){
            librosDeAutor.push(libro);
        }
    }
    return librosDeAutor;
}


let librosCortazar = buscarLibrosPorAutor("Julio Cortázar");
librosCortazar.forEach(libro => console.log(libro.info()));


// implementa una función añadirLibro que reciba como parámetros los datos de un nuevo libro (titulo, autor, añoPublicacion, genero) y lo añada al arreglo biblioteca.

function añadirLibro(titulo, autor, añoPublicacion, genero){
    let nuevoLibro = new Libro(titulo,autor,añoPublicacion, genero);
    biblioteca.push(nuevoLibro);
}

let libroAgregado = añadirLibro(`El hacedor`, `Jorge Luis Borges`, 1960, `poesía`);

biblioteca.forEach(libro => console.log(libro.info()+"\n"));

let librosBorges = buscarLibrosPorAutor(`Jorge Luis Borges`);
librosBorges.forEach(libro => console.log(libro.info()+"\n"));