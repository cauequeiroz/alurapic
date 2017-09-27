import { Component } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FotoService } from '../foto/foto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})
export class CadastroComponent {

    foto: FotoComponent = new FotoComponent();
    meuForm: FormGroup;
    service: FotoService;
    route: ActivatedRoute;
    router: Router;

    constructor(fb: FormBuilder, service: FotoService, route: ActivatedRoute, router: Router) {

        this.service = service;
        this.route = route;
        this.router = router;

        this.route.params.subscribe(params => {

            let id = params['id'];
            if ( id ) {

                this.service
                    .buscaPorId(id)
                    .subscribe(foto => this.foto = foto);
            }
        });

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
            .subscribe(() => {
                this.foto = new FotoComponent();
                this.router.navigate(['']);
            }, error => console.log(error));            
    }
}