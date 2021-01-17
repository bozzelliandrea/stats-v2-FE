import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'flag'
})
export class FlagPipe implements PipeTransform{

  transform(value: string): string {
    switch (value){
      case 'Thai':
        return "thailand";
      case 'Italian':
        return "italy";
      case 'French':
        return "france";
      case 'Canadian':
        return "canada";
      case 'Finland':
        return "finland";
      case 'British':
        return "united-kingdom";
      case 'Australian':
        return "australia";
      case 'Mexican':
        return "brazil";
      case 'Spanish':
        return "spain";
      case 'German':
        return "germany";
      default:
        return 'european-union';
    }
  }
}
