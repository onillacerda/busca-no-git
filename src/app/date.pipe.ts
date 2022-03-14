import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {
  
  transform(value: any, args?:any): any {
    if(value){
      let today:any= new Date();
      let savedTime:any= new Date(value);
      const seconds = Math.floor((today - savedTime) / 1000);
      if(seconds < 30) {
        return '';
      }
      const timeIntervals = {
        'year': 31536000,
        'month': 2592000,
        'week': 604800,
        'day': 86400,
        'hour': 3600,
        'minute': 60,
        'second': 1
      };
      let counter;
      for (const timeInterval in timeIntervals) {
        counter = Math.floor(seconds/ timeIntervals[timeInterval])
        if(counter > 0) {
          if(counter === 1){
            return counter + ' ' + timeInterval + ' ago'; //atende a singular
          } else {
            return counter + ' ' + timeInterval + 's ago'; //atende plural 
          }
        }
      }
    }
    return value;
    
  }

}
