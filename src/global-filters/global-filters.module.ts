import { Module } from '@nestjs/common';
import { AllExceptionsFilter } from 'src/filter/exceptions.filter';

@Module({
    providers: [
        {
            provide: 'APP_FILTER',
            useClass: AllExceptionsFilter,
        },
    ],
})
export class GlobalFiltersModule {}
