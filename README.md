# ngbootstrap-datepicker-format

Formatting ng-bootstrap datepicker:

ngbootstrap datepickerdan gelen değerin "gg.aa.yyyy" şeklinde dönmesi için ayarlanmıştır. Siz istediğiniz formatta oluşturabilirsiniz.

npm install --save @ng-bootstrap/ng-bootstrap komutu ile ng-bootstap' iprojemize ekliyoruz.

app.module.ts dosyasında import kısmına imports: [NgbModule] ekliyoruz.(Yukarıya referansını eklemeyi unutmayın "import {NgbModule} from '@ng-bootstrap/ng-bootstrap';")

ngbDateFRParserFormatter.ts dosyasını oluşturun.

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
      (date.day < 10 ? '0' + date.day.toString() : date.day.toString()) +  //gün 10 dan küçükse başına sıfır koy
      '.' +
      (date.month < 10 ? '0' + date.month.toString() : date.month.toString()) + //ay 10 dan küçükse başına sıfır koy
      '.' +
      date.year.toString()
    );
  }
}



app.module.ts dosyasında providers kısmına;

providers: [ {provide: NgbDateParserFormatter, useClass: NgbDateFRParserFormatter} ]

ekliyoruz. Hepsi bu kadar
