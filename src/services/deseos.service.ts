import { Injectable } from '@angular/core';
import { Lista } from '../models';

@Injectable()
export class DeseosService{

    Listas: Lista[] = [];

    constructor(){

        // const lista1 = new Lista('Recolectar Piedras del Infinito');
        // const lista2 = new Lista('Heroes a vencer');

        // this.Listas.push(lista1,lista2);

        // console.log(this.Listas);
    }

    agregarLista( lista:Lista)
    {
        this.Listas.push(lista);
        this.guardarStorage();
    }

    borrarLista(lista:Lista)
    {
        this.Listas = this.Listas.filter( listaData => {
            return listaData.id !== lista.id
        });
        this.guardarStorage();
    }

    guardarStorage(){
        localStorage.setItem('data', JSON.stringify(this.Listas));
    }

    cargarStorage(){
        if (localStorage.getItem('data'))
        {
            this.Listas =  JSON.parse(localStorage.getItem('data'));
        }else
        {
            this.Listas = [] 
        }
    }
}