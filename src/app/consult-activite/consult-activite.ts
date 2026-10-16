import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ActiviteService } from '../services/activite';

@Component({
  imports: [FormsModule],
  selector: 'app-consult-activite',
  styleUrl: './consult-activite.scss',
  templateUrl: './consult-activite.html',
})
export class ConsultActivite {
  index: number = 0;
  modeEdition: boolean = false;
  titreEdition: string = '';

  constructor(
    private route: ActivatedRoute,
    private monRouteur: Router,
    public activiteService: ActiviteService
  ) {
    this.index = Number(this.route.snapshot.params['id'] ?? 0);
  }

  supprimeElem(index: number): void {
    this.activiteService.removeItem(index);
    this.monRouteur.navigate(['/']);
  }

  activerEdition(): void {
    this.titreEdition = this.activiteService.objectifs[this.index];
    this.modeEdition = true;
  }

  sauvegarder(): void {
    this.activiteService.objectifs[this.index] = this.titreEdition;
    this.modeEdition = false;
  }

  retour(): void {
    this.monRouteur.navigate(['/']);
  }
}
