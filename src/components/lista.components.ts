import { Component, Input } from '@angular/core';
import { DeseosService } from '../services/deseos.service';
import { Lista } from '../models';
import { NavController, AlertController, ItemSliding } from 'ionic-angular';
import { AgregarPage } from '../pages/agregar/agregar.component';

@Component({
    selector: 'app-lista',
    templateUrl: 'lista.components.html' 
})
    

export class ListasComponent{

    @Input() terminada: boolean = false;

    constructor( public deseosService:DeseosService,
                 private navCtrl: NavController,
                 private alertCtrl: AlertController )
    {
        
    }

    listaSeleccionada( lista:Lista){
        this.navCtrl.push(AgregarPage, {
            titulo: lista.titulo,
            lista : lista
        });
    }
    
    borrarLista(lista:Lista)
    {
        this.deseosService.borrarLista(lista);
    }

    editarLista(lista: Lista, slideItem: ItemSliding)
    {
        slideItem.close();
        const alerta = this.alertCtrl.create({
            title: 'Editar Nombre',
            message: 'Editar el nombre de la lista:',
            inputs: [{
                name:'titulo',
                placeholder:'Nueva Tarea',
                value: lista.titulo
            }],

            buttons: [{
                text: 'Cancelar',
            },{
                text: 'Guardar',
                handler: data => {
                    if( data.titulo.length === 0)
                    {
                        return 
                    }

                    lista.titulo = data.titulo;
                    this.deseosService.guardarStorage();
                }
            }]
        });

        alerta.present();
    }
}

