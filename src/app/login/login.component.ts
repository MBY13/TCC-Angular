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

  constructor(private authService: AuthService, private router: Router) { }

  submitLoginForm() {
    const loginValido = this.authService.fazerLogin(this.login, this.senha);
    if (loginValido) {
      this.router.navigate(['/dashboard']); // Redireciona para a página home após o login
    } else {
      this.erroLogin = true; // Exibe mensagem de erro no template
    }
  }
}
