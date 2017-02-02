import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contentFormat'
})
export class ContentFormatPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let [content] = args;
    return content.replaceAll('**', '<br>')
  }

}
