import { Component, OnInit } from '@angular/core';
import { DecoderService } from '../decode/decoder.service';

@Component({
  selector: 'app-decode',
  templateUrl: './decode.component.html',
  styleUrls: ['./decode.component.css']
})
export class DecodeComponent implements OnInit {

  constructor(public decoder:DecoderService) { }

  ngOnInit(): void {
  }

}
