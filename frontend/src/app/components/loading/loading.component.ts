import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderService } from 'src/app/service/loader.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent {
  isLoading: Subject<boolean> = this.loaderService.isLoading;
  intervalId: any;
  tiempo: boolean = true;
  constructor(private loaderService: LoaderService){

  }

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.loaderService.increasessecond();
      if (this.loaderService.second >= 10) {
        this.stopInterval();
        this.tiempo =false;
      }
    }, 1000);
  }

  stopInterval() {
    clearInterval(this.intervalId);
  }

}
