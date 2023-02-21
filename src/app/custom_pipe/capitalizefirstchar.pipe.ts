import {Pipe,PipeTransform} from '@angular/core';
@Pipe ({
    name: 'capitalizeFirstChar'
})
export class CapitalizeFirstChar implements PipeTransform {
    transform(value: any): string {
        if (!value) return value;
        return value.charAt(0).toUpperCase() + value.slice(1);
    }
}