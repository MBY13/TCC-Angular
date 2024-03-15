import { Component } from '@angular/core';

@Component({
  selector: 'app-criar-cadastro',
  templateUrl: './criar-cadastro.component.html',
  styleUrls: ['./criar-cadastro.component.css']
})
export class CriarCadastroComponent {
  username: string;
  dob: Date;
  email: string;
  login: string;
  senha: string;
  selectedIntegration: string;
  integrationList: string[] = ['Integração 1', 'Integração 2', 'Integração 3'];
  registrationError: boolean = false;

  constructor() {}

  submitRegistrationForm() {
    // Aqui você pode adicionar a lógica para enviar os dados do formulário
    // Para simplificar, vamos apenas imprimir os dados no console
    console.log('Dados do Formulário:');
    console.log('Nome de Usuário:', this.username);
    console.log('Data de Nascimento:', this.dob);
    console.log('Email:', this.email);
    console.log('Login:', this.login);
    console.log('Senha:', this.senha);
    console.log('Integração Selecionada:', this.selectedIntegration);

    // Você pode adicionar a lógica de envio para o seu serviço ou API aqui
  }
}
