import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {RequestService} from "../../../@shared/services/request.service";
import {Observable} from "rxjs";
import {ApiResourceEnum} from "../../../@shared/enums/api-resource.enum";
import {map} from "rxjs/operators";
import {Race} from "../../../@shared/interfaces/race.interface";

@Injectable({
  providedIn: 'root'
})
export class RaceService {

  constructor(private _http: HttpClient,
              private _requestService: RequestService) {
  }

  public getAllConstructorsList(): Observable<Race[]> {

    return this._http.get(`${this._requestService.baseUrl}/${ApiResourceEnum.RACES}`).pipe(
      map((res) => {
          return (res || []) as Race[];
        }
      )
    );
  }

  public getConstructorsList(id: string): Observable<Race> {

    return this._http.get(`${this._requestService.baseUrl}/${ApiResourceEnum.RACES}/${id}`).pipe(
      map((res) => {
          return (res || []) as Race;
        }
      )
    );
  }
}
