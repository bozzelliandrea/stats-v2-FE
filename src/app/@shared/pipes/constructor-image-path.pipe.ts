import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'constructorImagePath'
})
export class ConstructorImagePathPipe implements PipeTransform {

  transform(value: number): string {
    switch (value){
      case 1:
        return "mclaren";
      case 2:
        return "mercedes";
      case 3:
        return "williams";
      case 4:
        return "renault";
      case 5:
        return "alfa-romeo";
      case 6:
        return "ferrari";
      case 7:
        return "red-bull";
      case 8:
        return "haas";
      case 9:
        return "racing-point";
      case 10:
        return "alphatauri";
      default:
        return '?';
    }
  }


}
