
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



let libro1 = Libro(`El principito`, `Antoine de Saint-Exupéry`, 1943, `Literatura infantil`);
let libro2 = Libro(`Rayuela`, `Julio Cortázar`, 1963, `Ficción contemporánea`);
let libro3 = Libro(`El Aleph`, `Jorge Luis Borges`, 1945, `cuentos`);
let biblioteca = {libro1, libro2, libro3};

// implementa una función buscarLibrosPorAutor que reciba como parámetro el nombre de un autor (string) y devuelva un arreglo con los libros escritos por ese autor.

function buscarLibrosPorAutor(autor){
    let librosDeAutor = [];
    for(let libro in biblioteca){
        if(libro.autor == autor){
            librosDeAutor.push(libro);
        }
    }
    return librosDeAutor;
}