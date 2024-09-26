import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateEmail'
})
export class TruncateEmailPipe implements PipeTransform {
  transform(email: string, maxLength: number = 15): string {
    if (email.length > maxLength) {
      const truncated = email.slice(0, maxLength);
      return `${truncated}@...`;
    }
    return email;
  }
}
