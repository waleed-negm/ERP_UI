import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ExpensesItemsComponent } from './expenses-items.component';

@NgModule({
    imports: [RouterModule.forChild([{ path: '', component: ExpensesItemsComponent }])],
    exports: [RouterModule],
})
export class ExpensesItemsRoutingModule {}
