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

  constructor(private http: HttpClient, private service: IntegracoesService) { }
  login: string;
  senha: string;

  hide: boolean = true;
}
