import { Injectable } from '@angular/core';
import * as $ from 'jquery';

import { environment } from './../../environments/environment';

@Injectable()

export class HtmlGetService {
  constructor() { }

  getInfo(fName: string, returnClass: any) {
    const url = environment.BEServer + fName;
    $.ajax({
        type : 'get',
        url : url,
        dataType : 'json',
        success : function(data)
        {returnClass.takeDataFromGet(data); }
    });
  }
}
