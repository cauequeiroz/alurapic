import { Component } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FotoService } from '../foto/foto.service';

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})
export class CadastroComponent {

    foto: FotoComponent = new FotoComponent();
    meuForm: FormGroup;
    service: FotoService;

    constructor(fb: FormBuilder, service: FotoService) {

        this.service = service;

        this.meuForm = fb.group({
            titulo: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
            url: ['', Validators.required],
            descricao: ['']
        })
    }

    cadastrar(event: Event) {

        event.preventDefault();

        this.service
            .cadastrar(this.foto)
            .subscribe(
                () => this.foto = new FotoComponent(),
                error => console.log(error)
            );            
    }
}