import { EmployeeSalary } from './IEmployeeSalary.interface';
import { SalaryBatch } from './ISalaryBatch.interface';
import { BaseModel } from './common/IBase-model.interface';

export interface BatchContainer extends BaseModel {
    accNum: string;
    payrollDate: string;
    salaryBatch: SalaryBatch;
    employeeSalaries: EmployeeSalary[];
}
