import { Component, OnInit } from '@angular/core';
import { Curso, Semestres } from './notas-list.models';
import { NotasListService } from './notas-list.service';

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

  curso: Curso;
  semestres: Semestres; 
  CursoID: string;
  idAluno: string = 'e14a8cc9-d355-11ee-81ef-02502f3d9bd5' // vira Global no inicio da aplicação 


  constructor(private notasListService: NotasListService) { }

  ngOnInit() {
    this.carregarCurso();
  }

  toggleTabela() {
    this.mostrarTabelaDetalhada = !this.mostrarTabelaDetalhada;
  }

  filtrarDetalhes(row: NotasResumidasList) {

    this.clickedRow = row;

    this.filteredNotasDetalhadas = this.NotasDetalhadas.filter(det => det.Disciplina === row.Disciplina);

    if (this.filteredNotasDetalhadas.length === 0) {
      this.mostrarTabelaDetalhada = false;
    } else {
      this.mostrarTabelaDetalhada = true;
    }

    console.log('Disciplina clicada:', row.Disciplina); // Mensagem de log para verificar
  }

  isRowSelected(row: NotasResumidasList) {
    return this.clickedRow === row;
  }

  private carregarCurso() {
    this.notasListService.getCurso(this.idAluno).subscribe(
      (data: Curso) => {
        this.curso = data;
        this.CursoID = this.curso.result[0].id;
        console.log(this.CursoID); // Aqui você tem acesso aos dados do curso
        this.carregaSemestre();
      },
      (error) => {
        console.error('Erro ao obter Curso:', error);
      }
    );
  }
  private carregaSemestre() {
    this.notasListService.getSemestres(this.idAluno, this.CursoID).subscribe(
      (data: Semestres) => {
        this.semestres = data;
        // this.CursoID = this.curso.result[0].id;
        console.log('Semestres:', this.semestres); // Mostra o objeto Semestres completo no console
      },
      (error) => {
        console.error('Erro ao obter Semestres:', error);
      }
    );
  }
}