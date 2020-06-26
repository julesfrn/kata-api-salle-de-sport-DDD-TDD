import ObjetValeur from '../ObjetValeur'

import ErreurPrixMensuelRequis from './erreurs/ErreurPrixMensuelRequis'
import ErreurPrixMensuelInvalide from './erreurs/ErreurPrixMensuelInvalide'

export default class PrixMensuel extends ObjetValeur {
  constructor(private readonly prixMensuel: number) {
    super()
    this.validerObjet()
  }

  get valeur() {
    return this.prixMensuel
  }

  protected validerObjet() {
    if (!this.prixMensuel) throw new ErreurPrixMensuelRequis()
    if (typeof this.prixMensuel !== 'number' || this.prixMensuel < 0) throw new ErreurPrixMensuelInvalide()
  }
}
