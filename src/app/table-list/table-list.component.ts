import { Component, OnInit } from '@angular/core';

export interface NotasDetalhadasList {
  ID: number;
  Avaliacao: String;
  Data: Date;
  Conteudo: String;
  Nota: number;
}
export interface NotasResumidasList {
  ID: number;
  Disciplina: string;
  Nota: number;
  Frequencia: number;
  Resultado: string;
}

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})

export class TableListComponent implements OnInit {
  NotasDetalhadas: NotasDetalhadasList[] = [
    { ID: 1, Avaliacao: 'Avaliação 1', Data: new Date('2023-05-02'), Conteudo: '1 Introdução 1.1 Apresentação da disciplina 1.2...', Nota: 6.4 },
    { ID: 2, Avaliacao: 'Trabalho 1', Data: new Date('2023-06-20'), Conteudo:  '6 Sistemas ERP - Enterprise Resources Planning ...', Nota: 10.0  },
    { ID: 3, Avaliacao: 'Avaliação 2', Data: new Date('2023-06-27'), Conteudo: '5 MRP II - Manufacturing Resources Planning 5.1...', Nota: 10.0  }
  ];

  NotasResumidas: NotasResumidasList[] = [
    { ID: 1, Disciplina: 'Sistemas Interligados De Gestão'  , Nota: 8.8, Frequencia: 100.00   , Resultado: 'Aprovado' },
    { ID: 2, Disciplina: 'Gestão do Conhecimento'           , Nota: 9.9, Frequencia: 88.89    , Resultado: 'Aprovado' },
    { ID: 3, Disciplina: 'Gerência de Redes de Computadores', Nota: 9.0, Frequencia: 100.00   , Resultado: 'Aprovado' }
  ];

  mostrarTabelaDetalhada: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleTabela() {
    this.mostrarTabelaDetalhada = !this.mostrarTabelaDetalhada;
  }

}