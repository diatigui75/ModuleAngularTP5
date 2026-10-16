import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ActiviteService } from '../services/activite';

@Component({
  imports: [FormsModule],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home implements OnInit {
  nbItems: number = 4;
  btnText: string = 'Ajouter un item';
  objectifText: string = '';

  constructor(private monRouteur: Router, public activiteService: ActiviteService) {}

  ngOnInit(): void {
    this.nbItems = this.activiteService.objectifs.length;
  }

  ajoutItem(): void {
    this.activiteService.objectifs.push(this.objectifText);
    this.nbItems = this.activiteService.objectifs.length;
    this.objectifText = '';
    setTimeout(() => {
      this.monRouteur.navigate(['/about']);
    }, 1000);
  }

  ouvrirDetail(index: number): void {
    this.monRouteur.navigate(['/consultAct', index]);
  }
}
