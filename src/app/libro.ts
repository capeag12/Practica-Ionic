export class Libro {
    private nombre:String

    constructor(nombre:String) {
        this.nombre = nombre
    }

    
    public get Nombre() : String {
        return this.nombre
    }
    
}
