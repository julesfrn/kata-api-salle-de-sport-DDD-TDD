import ObjetValeur from '../ObjetValeur'
import ErreurSexeRequis from './erreurs/ErreurSexeRequis'
import ErreurSexeNonValide from './erreurs/ErreurSexeNonValide'

export default class Sexe extends ObjetValeur {
  constructor(private readonly sexe: string) {
    super()
    this.validerObjet()
  }

  protected validerObjet() {
    if (!this.stringEstExistante(this.sexe)) throw new ErreurSexeRequis()
    const sexesValides: string[] = ['homme', 'femme', 'autre']
    if (sexesValides.indexOf(this.sexe) < 0) throw new ErreurSexeNonValide()
  }

  get valeur() {
    return this.sexe
  }
}