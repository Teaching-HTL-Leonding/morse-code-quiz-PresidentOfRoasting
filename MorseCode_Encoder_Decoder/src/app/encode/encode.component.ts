import { Component, OnInit } from '@angular/core';
import { EncoderService } from '../encoder.service';

@Component({
  selector: 'app-encode',
  templateUrl: './encode.component.html',
  styleUrls: ['./encode.component.css']
})
export class EncodeComponent implements OnInit {

  constructor(public encoder: EncoderService) { }

  ngOnInit(): void {
  }

  public morseCode():string{
    return this.encoder.getValue();
  }
}
