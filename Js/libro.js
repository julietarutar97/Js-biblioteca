
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



let biblioteca = {}