import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EncoderService {

  constructor() { }
  public morseCode:string='';

  public getValue():string{
      return this.morseCode;
  }
}
