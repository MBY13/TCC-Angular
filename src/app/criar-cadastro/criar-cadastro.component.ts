import { Component, OnInit } from '@angular/core';
import { CriarCadastroService } from './criar-cadastro.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-criar-cadastro',
  templateUrl: './criar-cadastro.component.html',
  styleUrls: ['./criar-cadastro.component.css'],
  providers: [DatePipe]
})
export class CriarCadastroComponent implements OnInit{
  username: string;
  dob: Date;
  email: string;
  login: string;
  senha: string;
  selectedIntegration: string;
  registrationError: boolean = false;
  dobString: string; // Nova propriedade para armazenar a data como string
  dataFormatada: string;

  constructor(private criarCadastroService: CriarCadastroService, private snackBar: MatSnackBar,private datePipe: DatePipe) { }
  // private criarCadastroService: CriarCadastroService, private snackBar: MatSnackBar
  ngOnInit() {
  }

  submitRegistrationForm() {
    // Aqui você pode adicionar a lógica para enviar os dados do formulário
    // Para simplificar, vamos apenas imprimir os dados no console
    
    console.log('Dados do Formulário:');
    console.log('Nome de Usuário:', this.username);
    this.dataFormatada = this.formatarData(this.dob);
    console.log('Data de Nascimento:', this.dataFormatada);
    console.log('Email:', this.email);
    console.log('Login:', this.login);
    console.log('Senha:', this.senha);

    this.criarCadastroService.insertLoginCadastro(this.login, this.senha, this.email, this.username, this.dob).subscribe(
      (response: any) => {
        console.log(response)
        if (response.statusCode == 201) {
          this.snackBar.open('Dados inseridos com sucesso', 'Fechar', { duration: 3000 });
        } else {
          this.snackBar.open('Erro ao inserir dados', 'Fechar', { duration: 3000 });
        }
      }
    );
  }

  private formatarData(data: Date): string {
    const date = new Date(data);
    return date.toISOString();
  }
  
}
