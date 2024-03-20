import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { ApiRoutesHelpers } from 'utils/api/api-routes.helpers';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly loginPadrao = 'usuario';
  private readonly senhaPadrao = '123456';

  constructor(private http : HttpClient) {}

  fazerLogin(login: string, senha: string): boolean {
    // Verifica se o login e senha são iguais ao padrão
    if (login === this.loginPadrao && senha === this.senhaPadrao) {
      // Autenticação bem-sucedida
      localStorage.setItem('usuarioLogado', login); // Você pode armazenar o login em localStorage ou em uma variável global
      return true;
    } else {
      return false;
    }
  }
  LoginAuth(login: string, senha: string): Promise<any> {
    const AdicionarLoginCadastro = {
      login: login,
      senha: senha,
    };
    const relativeRoute = '/Login/Login';
    const endpoint: string = ApiRoutesHelpers.GetAbsoluteRoute(relativeRoute);
    
    return this.http.post(endpoint, AdicionarLoginCadastro, { responseType: 'text' })
      .toPromise()
      .then((response) => {
        // Lida com a resposta do servidor
        if (response) {
          // Aqui você pode fazer o que quiser com o token JWT
          console.log('Token JWT recebido AUTH_SERVICE:', response);
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
  
  

  fazerLogout(): void {
    localStorage.removeItem('usuarioLogado'); // Remove o login armazenado
  }

  estaLogado(): boolean {
    return !!localStorage.getItem('usuarioLogado'); // Verifica se há um usuário logado
  }
}
