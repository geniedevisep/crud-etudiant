import { Injectable } from '@angular/core';
import { Etudiant } from './model/etudiant';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  private etudiants: Etudiant[] = [];
  private etudiantsSubject = new BehaviorSubject<Etudiant[]>(this.etudiants);

  getEtudiants() {
    return this.etudiantsSubject.asObservable();
  }

  addEtudiant(etudiant: Etudiant) {
    etudiant.id = this.etudiants.length + 1;
    this.etudiants.push(etudiant);
    this.etudiantsSubject.next(this.etudiants);
  }

  deleteEtudiant(id: number) {
    this.etudiants = this.etudiants.filter((etudiant) => etudiant.id !== id);
    this.etudiantsSubject.next(this.etudiants);
  }
}
