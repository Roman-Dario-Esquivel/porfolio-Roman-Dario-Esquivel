import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoaderService } from '../service/loader.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(private loaderService: LoaderService) {

  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.show();
    this.loaderService.clearSecond();
    return next.handle(request).pipe(
      finalize(() => this.loaderService.hide()),
);
  }
}


