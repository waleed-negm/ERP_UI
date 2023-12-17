import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpensesTypesComponent } from './expenses-types.component';
import { ExpensesTypesRoutingModule } from './expenses-types-routing.module';
import { SharedModule } from '../../../../shared/shared.module.module';

@NgModule({
    declarations: [ExpensesTypesComponent],
    imports: [CommonModule, ExpensesTypesRoutingModule, SharedModule],
})
export class ExpensesTypesModule {}
