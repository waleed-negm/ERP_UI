export interface GenericResponseDto<T> extends ResponseBaseDto {
    body: T;
}

export interface ResponseDto extends ResponseBaseDto {
    body: any;
}

interface ResponseBaseDto {
    status: boolean;
    message: string;
    totalCount: number;
}
