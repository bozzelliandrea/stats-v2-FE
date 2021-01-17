import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {Driver} from "../../../../@shared/interfaces/driver.interface";
import {DriverService} from "../../services/driver.service";
import {FlagPipe} from "../../../../@shared/pipes/flag.pipe";
import {DriverPipe} from "../../../../@shared/pipes/driver.pipe";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-driver-detail',
  templateUrl: './driver-detail.component.html',
  styleUrls: ['./driver-detail.component.scss']
})
export class DriverDetailComponent implements OnInit, OnDestroy {

  public isLoading: boolean = false;
  public driver: Driver | undefined;

  private _subscription: Subscription = new Subscription();

  constructor(private _driverService: DriverService,
              private _flagPipe: FlagPipe,
              private _driverPipe: DriverPipe,
              private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.isLoading = true;
    const currentId = this._route.snapshot.paramMap.get('id');

    if (currentId) {
      this._subscription.add(
        this._driverService.getConstructorsList(currentId).subscribe(
          (driver: Driver) => {
            this.driver = driver;
            this.driver.imageUrl = 'assets/drivers/'.concat(this._driverPipe.transform(driver.id)).concat('.jpg');
            this.driver.flagUrl = 'assets/flags/'.concat(this._flagPipe.transform(driver.nationality)).concat('.svg');
            this.isLoading = false;
          },
          _ => {
            this.isLoading = false;
          }
        )
      )
    }
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }
}
