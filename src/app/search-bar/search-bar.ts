import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Auto } from '../auto';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
})
export class SearchBar {
  @Input() autos: Auto[] = [];
  @Output() selectAutoEvent = new EventEmitter<Auto>();

  brand = '';
  result: Auto[] = [];
  searched = false;

  searchAutoList(): void {
    const brand = this.brand.trim().toLowerCase();
    this.result = this.autos.filter((auto) => auto.brand.toLowerCase() === brand);
    this.searched = true;
  }

  selectedAuto(auto: Auto): void {
    this.selectAutoEvent.emit(auto);
  }
}