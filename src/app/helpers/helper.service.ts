import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(private http: HttpClient) {
  }

  urlEncode(obj) {
    let encodedParams = '';
    if ('object' !== typeof(obj)) {
      return 'Must be an object';
    }

    // tslint:disable-next-line:prefer-const
    let keys = Object.keys(obj);
    for (let index = 0; index < keys.length; index++) {
      const separator = ('undefined' !== typeof(obj[keys[index + 1]])) ? '&' : '';
      encodedParams += keys[index] + '=' + obj[keys[index]] + separator;
    }

    return encodedParams;
  }
}
