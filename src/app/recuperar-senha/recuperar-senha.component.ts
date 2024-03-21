import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RecuperarSenhaService } from './recuperar-senha.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BodyResponseCallback } from 'googleapis/build/src/apis/abusiveexperiencereport';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-recuperar-senha',
  templateUrl: './recuperar-senha.component.html',
  styleUrls: ['./recuperar-senha.component.css']
})
export class RecuperarSenhaComponent implements OnInit {

  email: string = '';
  resetPasswordToken: boolean = false;
  newPassword: string = '';
  resetToken: string = '';
  erroEmail: string = '';
  emailenviado: boolean = false;
  hide: boolean = true;

  constructor(private recuperarsenha: RecuperarSenhaService,private route: ActivatedRoute, private router: Router,private snackBar: MatSnackBar) {}

  submitEmail() {

    this.recuperarsenha.EmailSubmit(this.email)
        .then((response) => {
          // Lidar com a resposta da requisição bem-sucedida, se necessário
          console.log('Token JWT recebido:', response);
        })
        .catch((error) => {
          // Lidar com erros
          console.error(error);
          this.erroEmail = error; // Exibe mensagem de erro no template
        });
  }

  saveNewPassword(): void {

    this.recuperarsenha.NewPassword(this.email,this.newPassword,this.resetToken)
    .then((response) => {
      // Lidar com a resposta da requisição bem-sucedida, se necessário
      console.log('Token JWT recebido:', response);
      this.snackBar.open('Senha atualizada com sucesso', 'Fechar', { duration: 3000 });
      this.router.navigate(['/login']);
    })
    .catch((error) => {
      // Lidar com erros
      console.error(error);
      this.erroEmail = error; // Exibe mensagem de erro no template
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.email = params['email'];
      this.resetToken = params['token'];

      if (this.email && this.resetToken) {
        this.resetPasswordToken = true;
      }
    });
  }
}
