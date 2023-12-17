import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsListComponent } from './clients-list.component';
import { ClientsListRoutingModule } from './clients-list-routing.module';
import { SharedModule } from '../../../shared/shared.module.module';

@NgModule({
    declarations: [ClientsListComponent],
    imports: [CommonModule, ClientsListRoutingModule, SharedModule],
})
export class ClientsListModule {}
