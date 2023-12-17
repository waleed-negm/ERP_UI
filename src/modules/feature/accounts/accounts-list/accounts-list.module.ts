import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsListComponent } from './accounts-list.component';
import { AccountsListRoutingModule } from './accounts-list-routing.module';
import { SharedModule } from '../../../shared/shared.module.module';

@NgModule({
    declarations: [AccountsListComponent],
    imports: [CommonModule, AccountsListRoutingModule, SharedModule],
})
export class AccountsListModule {}
