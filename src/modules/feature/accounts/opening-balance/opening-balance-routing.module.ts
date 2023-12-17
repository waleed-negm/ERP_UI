import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpeningBalanceComponent } from './opening-balance.component';

const routes: Routes = [];

@NgModule({
    imports: [RouterModule.forChild([{ path: '', component: OpeningBalanceComponent }])],
    exports: [RouterModule],
})
export class OpeningEntryRoutingModule {}
