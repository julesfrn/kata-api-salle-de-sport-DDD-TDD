import ObjetValeur from '../ObjetValeur'
import ErreurPayeALAnneeRequis from './erreurs/ErreurPayeALAnneeRequis'

export default class PayeALAnnee extends ObjetValeur {
  constructor(private readonly payeALAnnee: boolean) {
    super()
    this.validerObjet()
  }

  protected validerObjet() {
    if (typeof this.payeALAnnee !== 'boolean') throw new ErreurPayeALAnneeRequis()
  }

  get valeur() {
    return this.payeALAnnee
  }
}
