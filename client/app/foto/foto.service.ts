import { Http, Headers, Response } from '@angular/http';
import { FotoComponent } from './foto.component';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class FotoService {

    http: Http;
    headers: Headers;
    url: string = 'v1/fotos';
    
    constructor(http: Http) {

        this.http = http;
        this.headers = new Headers();
        this.headers.append('Content-type', 'application/json');
    }

    cadastrar(foto: FotoComponent): Observable<Response> {

        if ( foto._id ) {

            return this.http
                .put(this.url + '/' + foto._id, JSON.stringify(foto), { headers: this.headers });
        } else {
            
            return this.http
                .post(this.url, JSON.stringify(foto), { headers: this.headers });
        }

    }

    listar(): Observable<FotoComponent[]> {
        
        return this.http
            .get(this.url)
            .map(res => res.json());
    }

    buscaPorId(id: string): Observable<FotoComponent> {

        return this.http
            .get(this.url + '/' + id)
            .map(res => res.json());
    }

    deletar(foto: FotoComponent): Observable<Response> {

        return this.http
            .delete(this.url + '/' + foto._id);
    }
}