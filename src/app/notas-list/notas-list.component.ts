import { Component, OnInit } from '@angular/core';

export interface NotasDetalhadasList {
  ID: number;
  Avaliacao: String;
  Data: Date;
  Conteudo: String;
  Nota: number;
  Disciplina: string;
}
export interface NotasResumidasList {
  ID: number;
  Disciplina: string;
  Nota: number;
  Frequencia: number;
  Resultado: string;
}

@Component({
  selector: 'app-notas-list',
  templateUrl: './notas-list.component.html',
  styleUrls: ['./notas-list.component.css']
})

export class TableListComponent implements OnInit {
  NotasDetalhadas: NotasDetalhadasList[] = [
    { ID: 1, Avaliacao: 'Avaliação 1', Data: new Date('2023-05-02'), Conteudo: '1 Introdução 1.1 Apresentação da disciplina 1.2...', Nota: 6.4  ,Disciplina: 'Sistemas Interligados De Gestão' },
    { ID: 2, Avaliacao: 'Trabalho 1', Data: new Date('2023-06-20'), Conteudo:  '6 Sistemas ERP - Enterprise Resources Planning ...', Nota: 10.0 ,Disciplina: 'Sistemas Interligados De Gestão' },
    { ID: 3, Avaliacao: 'Avaliação 2', Data: new Date('2023-06-27'), Conteudo: '5 MRP II - Manufacturing Resources Planning 5.1...', Nota: 10.0 ,Disciplina: 'Sistemas Interligados De Gestão' },
    { ID: 4, Avaliacao: 'Avaliação 1', Data: new Date('2023-03-31'), Conteudo: 'O conhecimento nas organizações. A economia do ...', Nota: 10.0 ,Disciplina: 'Gestão do Conhecimento' },
    { ID: 5, Avaliacao: 'Avaliação 2', Data: new Date('2023-05-26'), Conteudo: 'O conhecimento nas organizações. A economia do ...', Nota: 9.8 ,Disciplina: 'Gestão do Conhecimento' },
    { ID: 6, Avaliacao: 'Comunidade de práticas', Data: new Date('2023-06-30'), Conteudo: 'O conhecimento nas organizações. A economia do ...', Nota: 10.0 ,Disciplina: 'Gestão do Conhecimento' }
  ];

  NotasResumidas: NotasResumidasList[] = [
    { ID: 1, Disciplina: 'Sistemas Interligados De Gestão'  , Nota: 8.8, Frequencia: 100.00   , Resultado: 'Aprovado' },
    { ID: 2, Disciplina: 'Gestão do Conhecimento'           , Nota: 9.9, Frequencia: 88.89    , Resultado: 'Aprovado' },
    { ID: 3, Disciplina: 'Gerência de Redes de Computadores', Nota: 9.0, Frequencia: 100.00   , Resultado: 'Aprovado' }
  ];
  mostrarTabelaDetalhada: boolean = true;
  filteredNotasDetalhadas: NotasDetalhadasList[] = [];
  clickedRow: NotasResumidasList | undefined;

  constructor() { }

  ngOnInit() {
  }

  toggleTabela() {
    this.mostrarTabelaDetalhada = !this.mostrarTabelaDetalhada;
  }

  filtrarDetalhes(row: NotasResumidasList) {
    // if (this.clickedRow === row) {
    //   this.clickedRow = undefined;
    //   this.resetarTabelaDetalhada();
    //   return;
    // }

    this.clickedRow = row;

    this.filteredNotasDetalhadas = this.NotasDetalhadas.filter(det => det.Disciplina === row.Disciplina);

    if (this.filteredNotasDetalhadas.length === 0) {
      this.mostrarTabelaDetalhada = false;
    } else {
      this.mostrarTabelaDetalhada = true;
    }

    console.log('Disciplina clicada:', row.Disciplina); // Mensagem de log para verificar
  }

  // resetarTabelaDetalhada() {
  //   this.filteredNotasDetalhadas = [];
  //   this.mostrarTabelaDetalhada = true;
  // }
    // Função para verificar se a linha está selecionada
  isRowSelected(row: NotasResumidasList) {
    return this.clickedRow === row;
  }
}