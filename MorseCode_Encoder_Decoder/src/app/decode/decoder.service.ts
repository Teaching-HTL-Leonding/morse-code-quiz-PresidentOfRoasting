import { Injectable } from '@angular/core';

const A = 'A'.charCodeAt(0);
const morseToConvertRegex = /^[.\-\/ ]+$/;

@Injectable({
  providedIn: 'root'
})
export class DecoderService {
alphabet:string[] = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

  constructor() {

   }

  public morseCodeToDecode:string='';
  private decodedMorsecode:string='';

  public getValue():string{
    return this.decodedMorsecode;
  }

  public canDecode(morseToConvert: string): boolean {
    return morseToConvertRegex.test(morseToConvert);
  }

  public decodeMorseCode():void{
    var morseCode = [
      /* A */ '.-',
      /* B */ '-...',
      /* C */ '-.-.',
      /* D */ '-..',
      /* E */ '.',
      /* F */ '..-.',
      /* G */ '--.',
      /* H */ '....',
      /* I */ '..',
      /* J */ '.---',
      /* K */ '-.-',
      /* L */ '.-..',
      /* M */ '--',
      /* N */ '-.',
      /* O */ '---',
      /* P */ '.--.',
      /* Q */ '--.-',
      /* R */ '.-.',
      /* S */ '...',
      /* T */ '-',
      /* U */ '..-',
      /* V */ '...-',
      /* W */ '.--',
      /* X */ '-..-',
      /* Y */ '-.--',
      /* Z */ '--..',
    ];


    let textString = '';

    const words = this.morseCodeToDecode.split('/');
    words.forEach(word => {
      const letters = word.split(' ');
      letters.forEach(letter => {
        const letterIndex = morseCode.indexOf(letter)
        if(letterIndex===-1&&letter!=''){
          throw new Error('Morse code contains invalid pattern '+letter);
        }
        else{
          if(letter===''){
            textString+=' '
          }
          else{
            textString+= this.alphabet[letterIndex];
          }
        }
      });
    });

    this.decodedMorsecode=textString.slice(0,-1);
  }


}
