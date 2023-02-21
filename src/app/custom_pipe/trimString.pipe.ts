import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'trimString'
})

export class TrimStringPipe implements PipeTransform {
    transform(value: any, args: number): string {
        if(value.length>args){
            return value.substring(0,args)+'...';
        }
        return value;
    }
}