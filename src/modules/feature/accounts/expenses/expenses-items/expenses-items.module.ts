import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpensesItemsComponent } from './expenses-items.component';
import { ExpensesItemsRoutingModule } from './expenses-items-routing.module';
import { SharedModule } from '../../../../shared/shared.module.module';

@NgModule({
    declarations: [ExpensesItemsComponent],
    imports: [CommonModule, ExpensesItemsRoutingModule, SharedModule],
})
export class ExpensesItemsModule {}
