import {Component, OnDestroy, OnInit} from '@angular/core';
import {ConstructorService} from "../../services/constructor.service";
import {Subscription} from "rxjs";
import {Constructor} from "../../../../@shared/interfaces/constructor.interface";
import {ConstructorImagePathPipe} from "../../../../@shared/pipes/constructor-image-path.pipe";
import {Router} from "@angular/router";
import {FlagPipe} from "../../../../@shared/pipes/flag.pipe";

@Component({
  selector: 'app-constructors-list',
  templateUrl: './constructors-list.component.html',
  styleUrls: ['./constructors-list.component.scss']
})
export class ConstructorsListComponent implements OnInit, OnDestroy {

  public teamList: Constructor[] = [];
  public isLoading: boolean = false;

  private _subscription: Subscription = new Subscription();

  constructor(private _constructorService: ConstructorService,
              private _teamsPipe: ConstructorImagePathPipe,
              private _flagPipe: FlagPipe,
              private _router: Router) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this._subscription.add(this._constructorService.getAllConstructorsList().subscribe((response: Constructor[]) => {
        response.forEach((team: Constructor) => {
          team.imageUrl = 'assets/constructor-cars/'.concat(this._teamsPipe.transform(team.id)).concat('.JPG');
          team.flagUrl = 'assets/flags/'.concat(this._flagPipe.transform(team.nationality)).concat('.svg');
          this.teamList.push(team)
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

  public navigateToDetail(id: number): void{
    this._router.navigate(['/constructors/'+id])
  }

}
