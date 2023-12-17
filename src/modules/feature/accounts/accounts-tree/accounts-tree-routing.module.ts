import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AccountsTreeComponent } from './accounts-tree.component';

@NgModule({
    imports: [RouterModule.forChild([{ path: '', component: AccountsTreeComponent }])],
    exports: [RouterModule],
})
export class AccountsTreeRoutingModule {}
