import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChecksInSafeComponent } from './checks-in-safe.component';

@NgModule({
    imports: [RouterModule.forChild([{ path: '', component: ChecksInSafeComponent }])],
    exports: [RouterModule],
})
export class ChecksInSafeRoutingModule {}
