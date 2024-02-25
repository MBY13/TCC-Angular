import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { IntegracoesService } from 'app/integracoes/integracoes.service';


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

  constructor(private http: HttpClient, private service: IntegracoesService) 
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
      (response: Response) => {
        console.log('Dados inseridos com sucesso:', response.ok);
      },
      (error) => {
        console.error('Erro ao inserir dados:', error);
      }
    );
  }
}
