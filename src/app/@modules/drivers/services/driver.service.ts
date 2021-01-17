import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {RequestService} from "../../../@shared/services/request.service";
import {Observable} from "rxjs";
import {ApiResourceEnum} from "../../../@shared/enums/api-resource.enum";
import {map} from "rxjs/operators";
import {Driver} from "../../../@shared/interfaces/driver.interface";

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  constructor(private _http: HttpClient,
              private _requestService: RequestService) {
  }

  public getAllConstructorsList(): Observable<Driver[]> {

    return this._http.get(`${this._requestService.baseUrl}/${ApiResourceEnum.DRIVERS}`).pipe(
      map((res) => {
          return (res || []) as Driver[];
        }
      )
    );
  }

  public getConstructorsList(id: string): Observable<Driver> {

    return this._http.get(`${this._requestService.baseUrl}/${ApiResourceEnum.DRIVERS}/${id}`).pipe(
      map((res) => {
          return (res || []) as Driver;
        }
      )
    );
  }
}
