import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {RequestService} from "../../../@shared/services/request.service";
import {ApiResourceEnum} from "../../../@shared/enums/api-resource.enum";
import {map} from "rxjs/operators";
import {Constructor} from "../../../@shared/interfaces/constructor.interface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ConstructorService {

  constructor(private _http: HttpClient,
              private _requestService: RequestService) {
  }

  public getAllConstructorsList(): Observable<Constructor[]> {

    return this._http.get(`${this._requestService.baseUrl}/${ApiResourceEnum.CONSTRUCTORS}`).pipe(
      map((res) => {
          return (res || []) as Constructor[];
        }
      )
    );
  }

  public getConstructorsList(id: string): Observable<Constructor> {

    return this._http.get(`${this._requestService.baseUrl}/${ApiResourceEnum.CONSTRUCTORS}/${id}`).pipe(
      map((res) => {
          return (res || []) as Constructor;
        }
      )
    );
  }
}
