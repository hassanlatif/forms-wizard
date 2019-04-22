import { Pipe, PipeTransform } from '@angular/core';
import { NgbTime } from '@ng-bootstrap/ng-bootstrap/timepicker/ngb-time';

@Pipe({
  name: 'ngbTime'
})
export class NgbTimePipe implements PipeTransform {

  transform(value: NgbTime, args?: any): any {
    let timeStr: string;
    
    if (value) {
      const h = this.checkTime(value.hour);
      const m = this.checkTime(value.minute);
      timeStr = h + ":" + m;
    }

    return timeStr;
  }

  checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

}
