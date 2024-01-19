import { Observable } from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const newReq = req.clone({
                url: req.url.concat('&appid=5867283e650712605600cf5126588bc0')
        });
        return next.handle(newReq);
    }
}