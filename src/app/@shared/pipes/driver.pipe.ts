import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'driver'
})
export class DriverPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    switch (value){
      case 1:
        return "hamilton";
      case 2:
        return "bottas";
      case 3:
        return "leclerc";
      case 4:
        return "verstappen";
      case 5:
        return "albon";
      case 6:
        return "sainz";
      case 7:
        return "norris";
      case 8:
        return "ricciardo";
      case 9:
        return "ocon";
      case 10:
        return "kvyat";
      case 11:
        return "gasly";
      case 12:
        return "perez";
      case 13:
        return "stroll";
      case 14:
        return "giovinazzi";
      case 15:
        return "grosjean";
      case 16:
        return "magnussen";
      case 17:
        return "raikkonen";
      case 18:
        return "vettel";
      case 19:
        return "russell";
      case 20:
        return "latifi";
      default:
        return '?';
    }
  }


}
