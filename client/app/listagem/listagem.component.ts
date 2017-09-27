import { Component } from '@angular/core';
import { FotoService } from '../foto/foto.service';
import { FotoComponent } from '../foto/foto.component';

@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl: './listagem.component.html'
})
export class ListagemComponent {

    fotos: FotoComponent[]= [];
    service: FotoService;
    mensagem: string = '';

    constructor(service: FotoService) {

        this.service = service;

        this.service
            .listar()
            .subscribe(
                fotos => this.fotos = fotos,
                error => console.log(error)
            );
    }

    deletar(foto: FotoComponent) {

        this.service
            .deletar(foto)
            .subscribe(() => {
                
                let novasFotos = this.fotos.slice(0);
                novasFotos.splice(this.fotos.indexOf(foto), 1);
                
                this.fotos = novasFotos;
                this.mensagem = "Foto deletada com sucesso";

            }, error => console.log(error));
    }
}