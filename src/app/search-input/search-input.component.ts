import { Component, OnInit } from '@angular/core';
import {ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {
  @Output()
  clickoutEvent=new EventEmitter<any>();

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if(this.eRef.nativeElement.contains(event.target)) {

    } else {
      this.clickoutEvent.emit();
    }
  }
  constructor(private eRef: ElementRef) { }

  ngOnInit(): void {
  }

}
