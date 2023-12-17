import { BaseModel } from './common/IBase-model.interface';

export interface EmployeeSalary extends BaseModel {
    employeeId: number;
    name: string;
    basicSalary: number;
    allowances: number;
    overtime: number;
    commision: number;
    insuranceEmployer: number;
    grossIncome: number;
    insuranceEmployee: number;
    tax: number;
    staffAdvance: number;
    penalties: number;
    totalDeductions: number;
    netIncome: number;
}
