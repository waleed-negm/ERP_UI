import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLayoutModule } from 'src/modules/layout/layout.module';
import { NotfoundComponent } from '../modules/feature/notfound/notfound.component';
import { MessageService } from 'primeng/api';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from '../core/interceptors/error-handling.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [AppComponent, NotfoundComponent],
    imports: [BrowserModule, AppRoutingModule, AppLayoutModule, BrowserAnimationsModule],
    providers: [MessageService, { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }],
    bootstrap: [AppComponent],
})
export class AppModule {}
