import ObjetValeur from '../ObjetValeur'
import ErreurDateDeNaissanceRequise from './erreurs/ErreurDateDeNaissanceRequise'
import ErreurDateDeNaissanceInvalide from './erreurs/ErreurDateDeNaissanceInvalide'

export default class DateDeNaissance extends ObjetValeur {
  constructor(private readonly dateDeNaissance: Date) {
    super()
    this.validerObjet()
  }

  protected validerObjet() {
    if (!Boolean(this.dateDeNaissance)) throw new ErreurDateDeNaissanceRequise()
    const ageEnMillisecondes = Date.now() - this.dateDeNaissance.getTime()
    const age = new Date(ageEnMillisecondes).getUTCFullYear() - 1970
    if (age < 16) throw new ErreurDateDeNaissanceInvalide()
  }

  get valeur() {
    return this.dateDeNaissance
  }
}
