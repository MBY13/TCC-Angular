import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";
import { ApiRoutesHelpers } from "utils/api/api-routes.helpers";

@Injectable()
export class IntegracoesService{
    constructor(private http : HttpClient) {}

    insertDadosLogin(login: string, senha: string, tipoIntegracao: number, alunoId: string, faculdadeId: string): Observable<any> {
        const AdicionarIntegracaoCommand = {
          AlunoId: alunoId,
          FaculdadeId: faculdadeId,
          Login: login,
          Senha: senha,
          TipoIntegracao: tipoIntegracao
        };
        const relativeRoute = '/Integracoes';
        const endpoint: string = ApiRoutesHelpers.GetAbsoluteRoute(relativeRoute);
        return this.http.post(endpoint, AdicionarIntegracaoCommand).pipe(
          catchError(error => throwError(error))
        );
      }
}