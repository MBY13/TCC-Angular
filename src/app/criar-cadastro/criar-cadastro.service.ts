import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";
import { ApiRoutesHelpers } from "utils/api/api-routes.helpers";

@Injectable({
  providedIn: 'root'
})
export class CriarCadastroService{
    constructor(private http : HttpClient) {}

    insertLoginCadastro(login: string, senha: string, email: string, nome: string, dataNascimento: Date): Observable<any> {
        const AdicionarLoginCadastro = {
          login: login,
          senha: senha,
          email: email,
          nome: nome,
          dataNascimento: dataNascimento
        };
        const relativeRoute = '/Login/Cadastro';
        const endpoint: string = ApiRoutesHelpers.GetAbsoluteRoute(relativeRoute);
        return this.http.post(`${endpoint}`, AdicionarLoginCadastro).pipe(
          catchError(error => throwError(error))
        );
      }
}