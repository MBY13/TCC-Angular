import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from "rxjs";
import { Curso } from './notas-list.models'; // Ajuste o caminho conforme necessário
import { ApiRoutesHelpers } from "utils/api/api-routes.helpers";

@Injectable()
export class NotasListService {
    constructor(private http: HttpClient) { }

    getCurso(idAluno: string): Observable<Curso> {
        const relativeRoute = '/Notas';
        const endpoint: string = ApiRoutesHelpers.GetAbsoluteRoute(relativeRoute);
        return this.http.get<Curso>(`${endpoint}/GetCursos?AlunoId=${idAluno}`).pipe(
            catchError(error => throwError(error))
          );
      }
}
