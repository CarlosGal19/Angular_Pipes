import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleCasePipe',
})
export class ToggleCasePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    const caseValue = args[0] as string;
    if(caseValue === 'lower') {
      return value.toLocaleLowerCase();
    }
    return value.toLocaleUpperCase();
  }

}
