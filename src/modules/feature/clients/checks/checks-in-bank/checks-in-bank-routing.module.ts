import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChecksInBankComponent } from './checks-in-bank.component';

@NgModule({
    imports: [RouterModule.forChild([{ path: '', component: ChecksInBankComponent }])],
    exports: [RouterModule],
})
export class ChecksInBankRoutingModule {}
