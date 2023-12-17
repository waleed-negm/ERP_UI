import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { API } from '../../api.constants';
import { SupplierPaymentContainer } from '../../models/Expenditure/ISupplierPaymentContainer.interface';
import { PurchaseContainer } from '../../models/Expenditure/IPurchaseContainer.interface';
import { ContactCreating } from '../../models/Expenditure/IContactCreating.interface';
import { Purchase } from '../../models/Expenditure/IPurchase.interface';
import { PurchaseReturnBackContainer } from '../../models/Expenditure/IPurchaseReturnBackContainer.interface';
import { GenericResponseDto, ResponseDto } from '../../../dtos/IResponseDto.interface';
import { Supplier } from '../../models/Expenditure/ISupplierDto.interface';
import { MessageService } from 'primeng/api';

@Injectable({
    providedIn: 'root',
})
export class SupplierRepository {
    private http = inject(HttpClient);
    private messageService = inject(MessageService);

    private baseUrl: string = environment.apiUrl;
    private controllerName: string = API.Supplier;

    private get apiUrl(): string {
        return `${this.baseUrl}/${this.controllerName}`;
    }

    getAll(): Observable<GenericResponseDto<Supplier[]>> {
        return this.http.get<GenericResponseDto<Supplier[]>>(`${this.apiUrl}`);
    }

    create(model: ContactCreating): Observable<GenericResponseDto<Supplier>> {
        return this.http.post<GenericResponseDto<Supplier>>(`${this.apiUrl}`, model, { headers: this.getHeaders() });
    }

    returnBack(id: number): Observable<GenericResponseDto<PurchaseReturnBackContainer>> {
        return this.http.get<GenericResponseDto<PurchaseReturnBackContainer>>(`${this.apiUrl}/ReturnBack/${id}`);
    }

    newPurchase(id: number): Observable<GenericResponseDto<PurchaseContainer>> {
        return this.http.get<GenericResponseDto<PurchaseContainer>>(`${this.apiUrl}/Purchase?id=${id}`);
    }

    savePurchase(vm: PurchaseContainer): Observable<ResponseDto> {
        const formData: FormData = new FormData();
        formData.append('InvoiceFile', vm.invoiceFile);
        // Append other properties of vm to formData as needed

        return this.http.post<ResponseDto>(`${this.apiUrl}/Purchase`, formData, { headers: this.getHeaders() });
    }

    purchaseInvoices(): Observable<GenericResponseDto<Purchase[]>> {
        return this.http.get<GenericResponseDto<Purchase[]>>(`${this.apiUrl}/Purchase/Incovices`);
    }

    supplierPayment(id: number): Observable<GenericResponseDto<SupplierPaymentContainer>> {
        return this.http.get<GenericResponseDto<SupplierPaymentContainer>>(`${this.apiUrl}/Payment/${id}`);
    }

    saveSupplierPayment(vm: SupplierPaymentContainer): Observable<GenericResponseDto<ResponseDto>> {
        return this.http.post<GenericResponseDto<ResponseDto>>(`${this.apiUrl}/Payment`, vm, { headers: this.getHeaders() });
    }

    private getHeaders(): HttpHeaders {
        return new HttpHeaders({ 'Content-Type': 'application/json' });
    }
}
