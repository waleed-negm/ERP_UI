import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuppliersChkComponent } from './suppliers-chk.component';

@NgModule({
    imports: [RouterModule.forChild([{ path: '', component: SuppliersChkComponent }])],
    exports: [RouterModule],
})
export class SuppliersChkRoutingModule {}
