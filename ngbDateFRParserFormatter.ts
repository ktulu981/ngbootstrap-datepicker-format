import {
  NgbDateParserFormatter,
  NgbDateStruct
} from '@ng-bootstrap/ng-bootstrap';
import { Injectable } from '@angular/core';

@Injectable()
export class NgbDateFRParserFormatter extends NgbDateParserFormatter {
  parse(value: string): NgbDateStruct {
     
    let data = value.split('/');
    let year = Number(data[0]);
    let month = Number(data[1]) - 1;
    let day = Number(data[2]);
  
    return { year: year, month: month, day: day };
  }

  format(date: NgbDateStruct): string {
    if (date == null) {
        return null;
    }
    return (
      (date.day < 10 ? '0' + date.day.toString() : date.day.toString()) +
      '.' +
      (date.month < 10 ? '0' + date.month.toString() : date.month.toString()) +
      '.' +
      date.year.toString()
    );
  }
}
