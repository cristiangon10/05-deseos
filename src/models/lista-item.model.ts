

export class ListaItem {
    desc: string;
    completado: Boolean;

    constructor( desc:string){
        this.desc = desc;
        this.completado = false;
    }
}