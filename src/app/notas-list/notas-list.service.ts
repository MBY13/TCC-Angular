import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from "rxjs";
import { Curso, Semestres, Disciplina } from './notas-list.models'; // Ajuste o caminho conforme necessário
import { ApiRoutesHelpers } from "utils/api/api-routes.helpers";

@Injectable({
    providedIn: 'root'
  })
export class NotasListService {
    constructor(private http: HttpClient) { }

    getCurso(idAluno: string): Observable<Curso> {
        const relativeRoute = '/Notas';
        const endpoint: string = ApiRoutesHelpers.GetAbsoluteRoute(relativeRoute);
        return this.http.get<Curso>(`${endpoint}/GetCursos?AlunoId=${idAluno}`).pipe(
            catchError(error => throwError(error))
          );
      }

    getSemestres(idAluno: string, idCurso: string): Observable<Semestres> {
    const relativeRoute = '/Notas';
    const endpoint: string = ApiRoutesHelpers.GetAbsoluteRoute(relativeRoute);
    return this.http.get<Semestres>(`${endpoint}/GetSemestres?AlunoId=${idAluno}&CursoId=${idCurso}`).pipe(
        catchError(error => throwError(error))
        );
    }

    // getDisciplina(idSemestre: string): Observable<Disciplina> {
    // const relativeRoute = '/Notas';
    // const endpoint: string = ApiRoutesHelpers.GetAbsoluteRoute(relativeRoute);
    // return this.http.get<Disciplina>(`${endpoint}/GetDisciplinas?semestreId=${idSemestre}`).pipe(
    //     catchError(error => throwError(error))
    //     );
    // }
    getDisciplina(idSemestre: string): Promise<Disciplina> {
        const relativeRoute = '/Notas';
        const endpoint: string = ApiRoutesHelpers.GetAbsoluteRoute(relativeRoute);
        return this.http.get<Disciplina>(`${endpoint}/GetDisciplinas?semestreId=${idSemestre}`)
          .pipe(
            catchError(error => {
              throw error;
            })
          )
          .toPromise();
      }
}
