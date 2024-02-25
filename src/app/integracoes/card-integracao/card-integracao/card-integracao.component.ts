import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { IntegracoesService } from 'app/integracoes/integracoes.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-card-integracao',
  templateUrl: './card-integracao.component.html',
  styleUrls: ['./card-integracao.component.css']
})
export class CardIntegracaoComponent {

  @Input() cor: string;
  @Input() titulo: string;
  @Input() categoria: string;
  @Input() enumIntegracao: number;

  loginPreenchido: boolean = false;
  senhaPreenchida: boolean = false;
  hide: boolean = true;


  constructor(private http: HttpClient, private service: IntegracoesService, private snackBar: MatSnackBar) 
  {}

  login: string;
  senha: string;
  alunoId: string;
  faculdadeId: string;

  verificarPreenchimentoCampo(valor: string): boolean {
    return valor.trim().length > 0;
  }

  enviarDados() 
  {

    //TODO: ajustar depois para pegar como variavel global do sistema, pegar do login
    this.alunoId = "e14a8cc9-d355-11ee-81ef-02502f3d9bd5"
    this.faculdadeId = "5c31c001-d356-11ee-81ef-02502f3d9bd5"
    this.enumIntegracao = 1

    this.service.insertDadosLogin(this.login, this.senha, this.enumIntegracao, this.alunoId, this.faculdadeId).subscribe(
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
}
