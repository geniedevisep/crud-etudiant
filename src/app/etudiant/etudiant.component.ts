import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../model/etudiant';
import { EtudiantService } from '../etudiant.service';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.scss']
})
export class EtudiantComponent implements OnInit {

  etudiants: Etudiant[] = [];
  modalOpen = false;
  newEtudiant: Etudiant = { id: 0, nom: '', prenom: '', age: 0, email: '' };

  constructor(private etudiantService: EtudiantService) {}

  ngOnInit() {
    this.etudiantService.getEtudiants().subscribe((data) => (this.etudiants = data));
  }

  openModal() {
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
    this.newEtudiant = { id: 0, nom: '', prenom: '', age: 0, email: '' };
  }

  addEtudiant() {
    this.etudiantService.addEtudiant(this.newEtudiant);
    this.closeModal();
  }

  deleteEtudiant(id: number) {
    this.etudiantService.deleteEtudiant(id);
  }

}
