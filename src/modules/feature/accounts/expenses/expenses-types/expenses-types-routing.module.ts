import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ExpensesTypesComponent } from './expenses-types.component';

@NgModule({
    imports: [RouterModule.forChild([{ path: '', component: ExpensesTypesComponent }])],
    exports: [RouterModule],
})
export class ExpensesTypesRoutingModule {}
