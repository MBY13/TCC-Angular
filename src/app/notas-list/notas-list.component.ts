import { Component, OnInit } from '@angular/core';
import { Curso, Semestres, Disciplina, NotasResumidasList, NotasDetalhadasList} from './notas-list.models';
import { NotasListService } from './notas-list.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-notas-list',
  templateUrl: './notas-list.component.html',
  styleUrls: ['./notas-list.component.css']
})

export class TableListComponent implements OnInit {
  dataSourceDetalhada = new MatTableDataSource<NotasDetalhadasList>([]);
  NotasDetalhadas: NotasDetalhadasList[] = []
  
  dataSourceResumida = new MatTableDataSource<NotasResumidasList>([]);
  NotasResumidas: NotasResumidasList[] = [];

  mostrarTabelaDetalhada: boolean = true;
  filteredNotasDetalhadas: NotasDetalhadasList[] = [];
  clickedRow: NotasResumidasList | undefined;
  
  curso: Curso;
  semestres: Semestres; 
  disciplina: Disciplina;
  CursoID: string;
  idAluno: string = 'e14a8cc9-d355-11ee-81ef-02502f3d9bd5' // vira Global no inicio da aplicação 


  constructor(private notasListService: NotasListService) { }

  ngOnInit() {
    this.carregarCurso();
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
        console.log('Semestres:', this.semestres); // Mostra o objeto Semestres completo no console
  
        // Itera sobre cada semestre
        this.semestres.result.forEach((semestre) => {
          // Para cada semestre, chama a função para obter as disciplinas
          this.getDisciplinas(semestre.id);
        });
      },
      (error) => {
        console.error('Erro ao obter Semestres:', error);
      }
    );
  }
  private getDisciplinas(semestreId: string) {
    this.notasListService.getDisciplina(this.idAluno, semestreId).subscribe(
      (data: Disciplina) => {
        console.log(`Disciplinas do semestre ${semestreId}:`, data);
        data.result.forEach((disciplina) => {
          // Criando um objeto NotasResumidasList a partir dos dados da disciplina
          const notaResumida: NotasResumidasList = {
            ID: disciplina.id,
            Disciplina: disciplina.nome,
            Nota: disciplina.media,
            Frequencia: disciplina.frequencia,
            Resultado: this.obterResultado(disciplina.resultado) // Função para obter o resultado com base no código
          };

        // Adicionando a nova nota à lista NotasResumidas
        this.NotasResumidas.push(notaResumida);

        disciplina.avaliacoes.forEach((avaliacao) => {
         const notasDetalhadas: NotasDetalhadasList = {
            ID: avaliacao.id,
            Avaliacao: avaliacao.nome,
            Data: avaliacao.dataEntrega,
            Conteudo: avaliacao.conteudo,
            Nota: avaliacao.nota,
            Disciplina: disciplina.id
         } 
        this.NotasDetalhadas.push(notasDetalhadas)
        });
      });
      this.dataSourceResumida.data = this.NotasResumidas;
      console.log('NotasResumidas atualizadas:', this.NotasResumidas);

      this.dataSourceDetalhada.data = this.NotasDetalhadas;
      console.log('NotasDetalhadas atualizadas:', this.NotasDetalhadas);
      },
      (error) => {
        console.error(`Erro ao obter Disciplinas do semestre ${semestreId}:`, error);
      }
    );
  }
  // Função para obter o resultado com base no código
  private obterResultado(codigoResultado: number): string {
    if (codigoResultado === 1) {
      return 'Aprovado';
    } else if (codigoResultado === 2) {
      return 'Reprovado';
    } else {
      return 'Indefinido';
    } 
  }

  toggleTabela() {
    this.mostrarTabelaDetalhada = !this.mostrarTabelaDetalhada;
  }

  filtrarDetalhes(row: NotasResumidasList) {

    this.clickedRow = row;

    this.filteredNotasDetalhadas = this.NotasDetalhadas.filter(det => det.Disciplina === row.ID);

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
  
}