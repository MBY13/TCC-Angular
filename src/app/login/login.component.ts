import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login: string;
  senha: string;
  erroLogin: boolean = false;
  hide: boolean = true;

  constructor(private authService: AuthService, private router: Router) { }

  submitLoginForm() {

    const loginValido = this.authService.fazerLogin(this.login, this.senha);
  
    if (loginValido) {
      // Se o login for válido localmente, redireciona para a página do dashboard
      this.router.navigate(['/dashboard']);
    } else {
      // Se o login não for válido localmente, faz a chamada para autenticar no backend
      this.authService.LoginAuth(this.login, this.senha)
        .then((response) => {
          // Lidar com a resposta da requisição bem-sucedida, se necessário
          console.log('Token JWT recebido:', response);
          
          // Redirecionar para a página do dashboard
          this.router.navigate(['/dashboard']);
        })
        .catch((error) => {
          // Lidar com erros
          console.error(error);
          this.erroLogin = true; // Exibe mensagem de erro no template
        });
    }
  }
}
