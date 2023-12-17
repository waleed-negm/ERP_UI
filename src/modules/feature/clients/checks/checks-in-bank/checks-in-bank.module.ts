import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChecksInBankComponent } from './checks-in-bank.component';
import { ChecksInBankRoutingModule } from './checks-in-bank-routing.module';
import { SharedModule } from '../../../../shared/shared.module.module';

@NgModule({
    declarations: [ChecksInBankComponent],
    imports: [CommonModule, ChecksInBankRoutingModule, SharedModule],
})
export class ChecksInBankModule {}
