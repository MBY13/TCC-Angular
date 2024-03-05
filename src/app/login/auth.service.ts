import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly loginPadrao = 'usuario';
  private readonly senhaPadrao = '123456';

  constructor() { }

  fazerLogin(login: string, senha: string): boolean {
    // Verifica se o login e senha são iguais ao padrão
    if (login === this.loginPadrao && senha === this.senhaPadrao) {
      // Autenticação bem-sucedida
      localStorage.setItem('usuarioLogado', login); // Você pode armazenar o login em localStorage ou em uma variável global
      return true;
    } else {
      // Autenticação falhou
      return false;
    }
  }

  fazerLogout(): void {
    localStorage.removeItem('usuarioLogado'); // Remove o login armazenado
  }

  estaLogado(): boolean {
    return !!localStorage.getItem('usuarioLogado'); // Verifica se há um usuário logado
  }
}
