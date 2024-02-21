import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";
import { ApiRoutesHelpers } from "utils/api/api-routes.helpers";

@Injectable()
export class DashboardService{
    constructor(private http : HttpClient) {}

    getAfazeresPendentes(): Observable<any> {
        const relativeRoute = '/DashBoard/afazeres-pendentes';
        var endpoint : string = ApiRoutesHelpers.GetAbsoluteRoute(relativeRoute);
        return this.http.get(endpoint).pipe(catchError(error => throwError(error)));
    }
}