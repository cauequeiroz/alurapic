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

        return this.http
            .post(this.url, JSON.stringify(foto), { headers: this.headers });
    }

    listar(): Observable<FotoComponent[]> {
        
        return this.http
            .get(this.url)
            .map(res => res.json());
    }
}