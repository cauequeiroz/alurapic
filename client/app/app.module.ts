import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import 'rxjs/add/operator/map';

import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';
import { routing } from './app.routes';

import { FotoModule } from './foto/foto.module';
import { PainelModule } from './painel/painel.module';
import { BotaoModule } from './botao/botao.module';
 
@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FotoModule,
        PainelModule,
        BotaoModule,
        routing,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [ AppComponent, CadastroComponent, ListagemComponent ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}