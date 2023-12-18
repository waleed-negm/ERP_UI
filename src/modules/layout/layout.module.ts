import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';
import { BadgeModule } from 'primeng/badge';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { RippleModule } from 'primeng/ripple';
import { RouterModule } from '@angular/router';
import { AppFooterComponent } from 'src/modules/layout/footer/app.footer.component';
import { AppMenuitemComponent } from 'src/modules/layout/menu-item/app.menuitem.component';
import { AppMenuComponent } from 'src/modules/layout/menu/app.menu.component';
import { AppSidebarComponent } from 'src/modules/layout/sidebar/app.sidebar.component';
import { AppTopBarComponent } from 'src/modules/layout/topbar/app.topbar.component';
import { AppLayoutComponent } from './layout.component';
import { AppConfigModule } from './config/config.module';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService } from 'primeng/api';

@NgModule({
    declarations: [AppMenuitemComponent, AppTopBarComponent, AppFooterComponent, AppMenuComponent, AppSidebarComponent, AppLayoutComponent],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        InputTextModule,
        SidebarModule,
        BadgeModule,
        RadioButtonModule,
        InputSwitchModule,
        RippleModule,
        RouterModule,
        AppConfigModule,
        PanelMenuModule,
        ToastModule,
        ConfirmDialogModule,
    ],
    exports: [AppLayoutComponent],
    providers: [ConfirmationService],
})
export class AppLayoutModule {}
