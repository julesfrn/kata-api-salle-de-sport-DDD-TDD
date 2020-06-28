import ObjetValeur from '../ObjetValeur'

import ErreurReferenceFormuleRequise from './erreurs/ErreurReferenceFormuleRequise'

export default class ReferenceFormule extends ObjetValeur {
  constructor(private readonly referenceFormule: string) {
    super()
    this.validerObjet()
  }

  protected validerObjet() {
    if (!this.stringEstExistante(this.referenceFormule)) throw new ErreurReferenceFormuleRequise()
  }

  get valeur() {
    return this.referenceFormule
  }
}
