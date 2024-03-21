import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ApiRoutesHelpers } from "utils/api/api-routes.helpers";

@Injectable({
  providedIn: 'root'
})
export class RecuperarSenhaService{
    constructor(private http : HttpClient) {}

    EmailSubmit(email: string): Promise<any> {
        
        const AdicionarLoginCadastro = {
            email: email,
        };
        const relativeRoute = '/Login/RecuperarSenha';
        const endpoint: string = ApiRoutesHelpers.GetAbsoluteRoute(relativeRoute);
        
        return this.http.post(endpoint, AdicionarLoginCadastro, { responseType: 'text' })
          .toPromise()
          .then((response) => {
            // Lida com a resposta do servidor
            if (response) {
              // Aqui você pode fazer o que quiser com o token JWT
              console.log('Retorno AUTH_SERVICE:', response);
              // Você também pode redirecionar o usuário para outra página, por exemplo:
              // this.router.navigate(['/outra-pagina']);
              return response;
            } else {
              throw new Error('Ocorreu um erro ao processar a resposta do servidor.');
            }
          })
          .catch((error) => {
            // Lida com erros de requisição
            if (error.error instanceof ErrorEvent) {
              // Erro do lado do cliente
              console.error('Ocorreu um erro:', error.error.message);
            } else {
              // Erro do lado do servidor
              console.error(
                `Código de erro ${error.status}, ` +
                `corpo do erro: ${JSON.stringify(error.error)}`);
            }
            // Retorna uma Promise rejeitada com uma mensagem de erro
            throw new Error('Ocorreu um erro ao processar a solicitação. Por favor, tente novamente mais tarde.');
          });
      }

      NewPassword(email: string,novaSenha: string,token: string): Promise<any> {
        
        const AdicionarLoginCadastro = {
            email: email,
            novaSenha: novaSenha,
            token: token,
        };
        const relativeRoute = '/Login/RedefinirSenha';
        const endpoint: string = ApiRoutesHelpers.GetAbsoluteRoute(relativeRoute);
        
        return this.http.post(endpoint, AdicionarLoginCadastro, { responseType: 'text' })
          .toPromise()
          .then((response) => {
            // Lida com a resposta do servidor
            if (response) {
              // Aqui você pode fazer o que quiser com o token JWT
              console.log('Retorno AUTH_SERVICE:', response);
              // Você também pode redirecionar o usuário para outra página, por exemplo:
              // this.router.navigate(['/outra-pagina']);
              return response;
            } else {
              console.log('ERRO:', response);
              throw new Error('Ocorreu um erro ao processar a resposta do servidor.');
            }
          })
          .catch((error) => {
            // Lida com erros de requisição
            if (error.error instanceof ErrorEvent) {
              // Erro do lado do cliente
              console.error('Ocorreu um erro:', error.error.message);
            } else {
              // Erro do lado do servidor
              console.error(
                `Código de erro ${error.status}, ` +
                `corpo do erro: ${JSON.stringify(error.error)}`);
            }
            // Retorna uma Promise rejeitada com uma mensagem de erro
            throw new Error('Ocorreu um erro ao processar a solicitação. Por favor, tente novamente mais tarde.');
          });
      }
}