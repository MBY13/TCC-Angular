import { Component, OnInit } from '@angular/core';

export interface NotasDetalhadasList {
  ID: number;
  Avaliacao: String;
  Data: Date;
  Conteudo: String;
  Nota: number;
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

  mostrarTabelaDetalhada: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleTabela() {
    this.mostrarTabelaDetalhada = !this.mostrarTabelaDetalhada;
  }

}