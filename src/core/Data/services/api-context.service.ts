import { Injectable, inject } from '@angular/core';
import { UnitMeasuresRepository } from '../repositories/Store/unitMeasures.repository';
import { TaxRepository } from '../repositories/tax.repository';
import { SupplierRepository } from '../repositories/Expenditure/supplier.repository';
import { StoreItemsRepository } from '../repositories/Store/storeItem.repository';
import { SalaryRepository } from '../repositories/salary.repository';
import { ReportRepository } from '../repositories/GL/report.repository';
import { ProductTypesRepository } from '../repositories/Store/productTypes.repository';
import { OpenBalanceRepository } from '../repositories/GL/openBalance.repository';
import { NRRepository } from '../repositories/Sales/nr.repository';
import { NPRepository } from '../repositories/Expenditure/np.repository';
import { ListRepository } from '../repositories/list.repository';
import { ExpenseTypesRepository } from '../repositories/Expenditure/expenseTypes.repository';
import { ExpensesRepository } from '../repositories/Expenditure/expenses.repository';
import { ClientsRepository } from '../repositories/Sales/client.repository';
import { BrandRepository } from '../repositories/Store/brand.repository';
import { AccountChartCounterRepository } from '../repositories/GL/accountChartCounter.repository';
import { AccountChartRepository } from '../repositories/GL/accountChart.repository';

@Injectable({ providedIn: 'root' })
export class APIContextService {
    accountChartRepository = inject(AccountChartRepository);
    accountChartCounterRepository = inject(AccountChartCounterRepository);
    brandRepository = inject(BrandRepository);
    clientsRepository = inject(ClientsRepository);
    expensesRepository = inject(ExpensesRepository);
    expenseTypesRepository = inject(ExpenseTypesRepository);
    listRepository = inject(ListRepository);
    nPRepository = inject(NPRepository);
    nRRepository = inject(NRRepository);
    openBalanceRepository = inject(OpenBalanceRepository);
    productTypesRepository = inject(ProductTypesRepository);
    reportRepository = inject(ReportRepository);
    salaryRepository = inject(SalaryRepository);
    storeItemsRepository = inject(StoreItemsRepository);
    supplierRepository = inject(SupplierRepository);
    taxRepository = inject(TaxRepository);
    unitMeasuresRepository = inject(UnitMeasuresRepository);
}
