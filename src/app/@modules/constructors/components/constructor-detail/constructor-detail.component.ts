import {Component, OnDestroy, OnInit} from '@angular/core';
import {ConstructorService} from "../../services/constructor.service";
import {ConstructorImagePathPipe} from "../../../../@shared/pipes/constructor-image-path.pipe";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {Constructor} from "../../../../@shared/interfaces/constructor.interface";
import {FlagPipe} from "../../../../@shared/pipes/flag.pipe";
import {DriverPipe} from "../../../../@shared/pipes/driver.pipe";

@Component({
  selector: 'app-constructor-detail',
  templateUrl: './constructor-detail.component.html',
  styleUrls: ['./constructor-detail.component.scss']
})
export class ConstructorDetailComponent implements OnInit, OnDestroy {

  public isLoading: boolean = false;
  public team: any;

  private _subscription: Subscription = new Subscription();

  constructor(private _constructorService: ConstructorService,
              private _teamsPipe: ConstructorImagePathPipe,
              private _flagPipe: FlagPipe,
              private _driverPipe: DriverPipe,
              private _router: Router,
              private _route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    const currentId = this._route.snapshot.paramMap.get('id');

    if (currentId) {
      this._subscription.add(
        this._constructorService.getConstructorsList(currentId).subscribe(
          (team: Constructor) => {
            this.team = team;
            this.team.flagUrl = 'assets/flags/'.concat(this._flagPipe.transform(team.nationality)).concat('.svg');
            this.team.firstDriver.imageUrl = 'assets/drivers/'.concat(this._driverPipe.transform(team.firstDriver.id)).concat('.jpg');
            this.team.secondDriver.imageUrl = 'assets/drivers/'.concat(this._driverPipe.transform(team.secondDriver.id)).concat('.jpg');
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

  public navigateToDriver(id: number): void {
    if (id)
      this._router.navigate(['/drivers/' + id])
  }

}
