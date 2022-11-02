import { Component, OnInit } from '@angular/core';
import { EncoderService } from '../encode/encoder.service';

@Component({
  selector: 'app-encode',
  templateUrl: './encode.component.html',
  styleUrls: ['./encode.component.css']
})
export class EncodeComponent implements OnInit {

  constructor(public encoder: EncoderService) { }

  ngOnInit(): void {
  }

}
