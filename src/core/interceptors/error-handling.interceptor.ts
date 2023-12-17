import { Injectable, inject } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MessageService } from 'primeng/api';
import { ResponseDto } from '../dtos/IResponseDto.interface';
import { ValidationFieldError } from './../../modules/shared/interfaces/validation-field-error.interface';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    private messageService = inject(MessageService);

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            catchError((error: HttpErrorResponse) => {
                let errorMessage = 'An unknown error occurred';
                if (error instanceof HttpErrorResponse && error.status === 401) {
                    return this.handle401Error();
                } else if (error.error instanceof ErrorEvent) {
                    errorMessage = `Error: ${error.error.message}`;
                } else if (error.error.length > 0 && 'field' in error.error[0]) {
                    const fieldErrors = error.error as ValidationFieldError[];
                    errorMessage = this.combineFieldErrors(fieldErrors);
                } else if (typeof error.error === 'object') {
                    const responseDtoError = error.error as ResponseDto;
                    errorMessage = responseDtoError.message;
                } else if (typeof error.error === 'string') {
                    errorMessage = error.error;
                } else {
                    errorMessage = `Error Code: ${error.status}\nMessage: ${error.error?.message ?? error.message}`;
                }
                this.messageService.add({ severity: 'error', summary: 'خطأ', detail: errorMessage, life: 3000 });
                return throwError(() => new Error(errorMessage));
            }),
        );
    }

    private combineFieldErrors(fieldErrors: ValidationFieldError[]): string {
        const combinedErrors: string[] = [];
        for (const fieldError of fieldErrors) {
            if (fieldError.errors && fieldError.errors.length > 0) {
                combinedErrors.push(fieldError.errors.join(', '));
            }
        }
        return combinedErrors.join(',');
    }

    private handle401Error(): Observable<HttpEvent<any>> {
        // this._authService.logout();
        return throwError(() => new Error('unauthorized, please login again.'));
    }
}
