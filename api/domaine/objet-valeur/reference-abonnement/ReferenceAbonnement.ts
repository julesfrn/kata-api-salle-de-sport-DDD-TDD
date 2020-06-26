import ObjetValeur from '../ObjetValeur'

import ErreurReferenceAbonnementRequise from './erreurs/ErreurReferenceAbonnementRequise'

export default class ReferenceAbonnement extends ObjetValeur {
  constructor(private readonly referenceAbonnement: string) {
    super()
    this.validerObjet()
  }

  protected validerObjet() {
    if (!this.stringEstExistante(this.referenceAbonnement)) throw new ErreurReferenceAbonnementRequise()
  }

  get valeur() {
    return this.referenceAbonnement
  }
}
