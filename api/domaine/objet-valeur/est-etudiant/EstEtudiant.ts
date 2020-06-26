import ObjetValeur from '../ObjetValeur'

import ErreurEstEtudiantRequis from './erreurs/ErreurEstEtudiantRequis'

export default class EstEtudiant extends ObjetValeur {
  constructor(private readonly estEtudiant: boolean) {
    super()
    this.validerObjet()
  }

  protected validerObjet() {
    if (typeof this.estEtudiant !== 'boolean') throw new ErreurEstEtudiantRequis()
  }

  get valeur() {
    return this.estEtudiant
  }
}
