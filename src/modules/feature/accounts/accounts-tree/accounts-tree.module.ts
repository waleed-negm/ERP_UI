import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsTreeComponent } from './accounts-tree.component';
import { AccountsTreeRoutingModule } from './accounts-tree-routing.module';
import { SharedModule } from '../../../shared/shared.module.module';

@NgModule({
    declarations: [AccountsTreeComponent],
    imports: [CommonModule, AccountsTreeRoutingModule, SharedModule],
})
export class AccountsTreeModule {}
