import { Component, Input } from '@angular/core';


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

  hide: boolean = true;
}
