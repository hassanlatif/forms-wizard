import { Pipe, PipeTransform } from '@angular/core';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';

@Pipe({
  name: 'ngbDate'
})
export class NgbDatePipe implements PipeTransform {

  transform(value: NgbDate, args?: any): string {
    let timeStr: string;
    
    if (value) {
      const y = value.year;
      const m = this.checkDigit(value.month);
      const d = this.checkDigit(value.day);
      timeStr = `${d}/${m}/${y}`
    }

    return timeStr;
  }

  checkDigit(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }  

}
