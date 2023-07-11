import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  isLoading = new Subject<boolean>();
  second: number;

  constructor() { }

  show() {
    this.isLoading.next(true);
 }

 hide() {
    this.isLoading.next(false);
 }
clearSecond(){
  this.second = 0;
}
increasessecond(){
  this.second ++;
}

}


