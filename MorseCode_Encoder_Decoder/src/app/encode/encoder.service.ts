import { Injectable } from '@angular/core';

const A = 'A'.charCodeAt(0);

@Injectable({
  providedIn: 'root'
})
export class EncoderService {
  alphabet:string[] = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

  public morseCodeToEncode:string='';
  private encodedMorsecode:string='';

  public getValue():string{
      return this.encodedMorsecode;
  }

  public encodeMorseCode():void{
    const morseCode = [
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

    const words = this.morseCodeToEncode.split(' ');
    words.forEach(word => {
      const letters = word.split('');
      letters.forEach(letter => {
        const letterIndex = this.alphabet.indexOf(letter);
        if(letterIndex===-1){
          throw new Error('Morse code contains invalid pattern ${letter}');
        }
        else{
          textString+= morseCode[letterIndex]+' ';
        }
      });
      textString+='/'
    });

    this.encodedMorsecode=textString.slice(0,-1);
  }
}
