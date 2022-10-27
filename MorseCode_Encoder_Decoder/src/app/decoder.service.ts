import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DecoderService {

  constructor() { }

  private decodedMorsecode:string='';
  public getValue():string{
    return this.decodedMorsecode;
  }
}
