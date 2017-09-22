import { Pipe, PipeTransform } from '@angular/core';
import { FotoComponent } from './foto.component';

@Pipe({
    name: 'filtraPorTitulo'
})
export class FiltraPorTitulo implements PipeTransform {

    transform(fotos: FotoComponent[], digitado: string) {
        
        return fotos.filter(foto => foto.titulo.toLowerCase().includes(digitado.toLowerCase()));
    }
}