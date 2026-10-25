import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Auto } from './auto';
import { HeadBar } from './head-bar/head-bar';
import { SearchBar } from './search-bar/search-bar';

@Component({
  selector: 'app-root',
  imports: [NgIf, HeadBar, SearchBar],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  autoList: Auto[] = [
    { brand: 'BMW', model: 'X2', price: 190, power: 7, photo: 'photos/X2.webp', units: 5 },
    { brand: 'BMW', model: 'X3', price: 230, power: 9, photo: 'photos/X3.webp', units: 3 },
    { brand: 'BMW', model: 'iX', price: 350, power: 12, photo: 'photos/IX.webp', units: 2 },
    { brand: 'Audi', model: 'A3', price: 163, power: 6, photo: 'photos/A3.webp', units: 11 },
    { brand: 'Audi', model: 'Q3', price: 200, power: 8, photo: 'photos/Q3.webp', units: 7 },
    { brand: 'Audi', model: 'Q5', price: 260, power: 10, photo: 'photos/Q5.webp', units: 4 },
    { brand: 'Mercedes', model: 'Classe C', price: 240, power: 9, photo: 'photos/CLASS-C.webp', units: 6 },
    { brand: 'Mercedes', model: 'GLA', price: 210, power: 8, photo: 'photos/GLA.webp', units: 5 },
    { brand: 'Mercedes', model: 'GLE', price: 320, power: 11, photo: 'photos/GLE.webp', units: 3 },
    { brand: 'Land Rover', model: 'Defender', price: 330, power: 12, photo: 'photos/DEFENDER.webp', units: 2 },
    { brand: 'Land Rover', model: 'Range Rover', price: 450, power: 14, photo: 'photos/RANGE.webp', units: 1 },
    { brand: 'Land Rover', model: 'Evoque', price: 270, power: 10, photo: 'photos/EVOQUE.webp', units: 4 },
    { brand: 'Jaguar', model: 'E-Pace', price: 250, power: 9, photo: 'photos/EPACE.webp', units: 3 },
    { brand: 'Jaguar', model: 'F-Pace', price: 300, power: 11, photo: 'photos/FPACE.webp', units: 2 },
    { brand: 'Alfa Romeo', model: 'Giulia', price: 280, power: 10, photo: 'photos/GIULIA.webp', units: 3 },
    { brand: 'Alfa Romeo', model: 'Stelvio', price: 290, power: 11, photo: 'photos/STELVIO.webp', units: 2 },
  ];

  selectedAuto: Auto | null = null;

  updateAuto(auto: Auto): void {
    this.selectedAuto = auto;
  }
}