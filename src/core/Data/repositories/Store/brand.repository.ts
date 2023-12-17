import { Injectable } from '@angular/core';
import { API } from '../../api.constants';
import { GenericRepository } from '../generic.repository';
import { Brand } from '../../models/Store/IBrand.interface';
import { GenericResponseDto } from '../../../dtos/IResponseDto.interface';

@Injectable({
    providedIn: 'root',
})
export class BrandRepository extends GenericRepository<Brand, GenericResponseDto<Brand>> {
    constructor() {
        super();
        this.setControllerName(API.Brands);
    }
}
