import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SendProductForm {

  sendFormInfo(info: string){
    console.log(info);
  } 
}
