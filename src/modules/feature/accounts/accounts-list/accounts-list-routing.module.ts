import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AccountsListComponent } from './accounts-list.component';

@NgModule({
    imports: [RouterModule.forChild([{ path: '', component: AccountsListComponent }])],
    exports: [RouterModule],
})
export class AccountsListRoutingModule {}
