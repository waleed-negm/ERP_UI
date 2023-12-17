import { Injectable } from '@angular/core';
import { API } from '../../api.constants';
import { GenericRepository } from '../generic.repository';
import { ProductType } from '../../models/Store/IProduct-type.interface';
import { GenericResponseDto } from '../../../dtos/IResponseDto.interface';

@Injectable({
    providedIn: 'root',
})
export class ProductTypesRepository extends GenericRepository<ProductType, GenericResponseDto<ProductType>> {
    constructor() {
        super();
        this.setControllerName(API.ProductTypes);
    }
}
