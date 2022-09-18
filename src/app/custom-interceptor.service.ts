import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { WebService } from './web.service';
import { WebResponse } from './web-response';

@Injectable()
export class CustomInterceptorService implements HttpInterceptor {
  constructor(private webService: WebService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          if (event.body && event.body) {
            let customResponse: WebResponse = event.body;
            customResponse.message = customResponse.message.toUpperCase();
            const modEvent = event.clone({ body: customResponse });
            return modEvent;
          }
        }
      })
    );
  }
}
