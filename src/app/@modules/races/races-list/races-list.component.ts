import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {RaceService} from "../services/race.service";
import {Race} from "../../../@shared/interfaces/race.interface";
import {DriverPipe} from "../../../@shared/pipes/driver.pipe";

@Component({
  selector: 'app-races-list',
  templateUrl: './races-list.component.html',
  styleUrls: ['./races-list.component.scss']
})
export class RacesListComponent implements OnInit, OnDestroy {

  public isLoading: boolean = false;
  public raceList: Race[] = [];

  private _subscription: Subscription = new Subscription();

  constructor(private _raceService: RaceService,
              private _driverPipe: DriverPipe) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this._subscription.add(this._raceService.getAllRaceList().subscribe((response: Race[]) => {
        response.forEach((race: Race) => {
          race.winDriver.helmetUrl = 'assets/helmets/H-'.concat(this._driverPipe.transform(race?.winDriver.id)).concat('.JPG')
          this.raceList.push(race)
        });
        this.isLoading = false;
      },
      _ => {
        this.isLoading = false;
      }
    ));
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }
}
