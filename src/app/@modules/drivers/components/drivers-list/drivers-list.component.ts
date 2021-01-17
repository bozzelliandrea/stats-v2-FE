import {Component, OnDestroy, OnInit} from '@angular/core';
import {Driver} from "../../../../@shared/interfaces/driver.interface";
import {Subscription} from "rxjs";
import {DriverService} from "../../services/driver.service";
import {FlagPipe} from "../../../../@shared/pipes/flag.pipe";
import {Router} from "@angular/router";
import {DriverPipe} from "../../../../@shared/pipes/driver.pipe";

@Component({
  selector: 'app-drivers-list',
  templateUrl: './drivers-list.component.html',
  styleUrls: ['./drivers-list.component.scss']
})
export class DriversListComponent implements OnInit, OnDestroy {

  public driverList: Driver[] = [];
  public isLoading: boolean = false;

  private _subscription: Subscription = new Subscription();

  constructor(private _driverService: DriverService,
              private _flagPipe: FlagPipe,
              private _driverPipe: DriverPipe,
              private _router: Router) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this._subscription.add(
      this._driverService.getAllConstructorsList().subscribe(
        (response: Driver[]) => {
          response.forEach((driver: Driver) => {
            driver.helmetUrl = 'assets/helmets/H-'.concat(this._driverPipe.transform(driver.id)).concat('.JPG')
            driver.flagUrl = 'assets/flags/'.concat(this._flagPipe.transform(driver.nationality)).concat('.svg');
            this.driverList.push(driver);
          });
          this.isLoading = false;
        },
        _ => {
          this.isLoading = false;
        }
      )
    );
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  public navigateToDriver(id: number): void {
    this._router.navigate(['/drivers/' + id])
  }

}
