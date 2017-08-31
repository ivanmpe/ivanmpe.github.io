import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class CommunicationService {
    private url = 'http://localhost:9000/mp4200th/imprimir';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) {
    }

    imprimir(texto: string) {
        const body = JSON.stringify({texto: texto});
        return this.http.post(this.url, body, {headers: this.headers}).subscribe((res) => console.log(res));
    }

    esperaImpressao(texto: string, tempo: number) {
        setTimeout(() => {
            this.imprimir(texto);
        }, 4000 * tempo);
    }

}
