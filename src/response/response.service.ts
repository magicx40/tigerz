import { Injectable } from '@nestjs/common';

export interface ApiResponse<T> {
    code: number;
    message: string;
    data?: T;
}

@Injectable()
export class ResponseService {
    success<T>(data?: T, message = '请求成功'): ApiResponse<T> {
        return {
            code: 200,
            message,
            data,
        };
    }

    error(message = '请求失败', code = 500): ApiResponse<null> {
        return {
            code,
            message,
        };
    }
}
