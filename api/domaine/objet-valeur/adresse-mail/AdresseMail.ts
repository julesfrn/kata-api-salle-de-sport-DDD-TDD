import ObjetValeur from '../ObjetValeur'
import ErreurAdresseMailRequise from './erreurs/ErreurAdresseMailRequise'
import ErreurAdresseMailInvalide from './erreurs/ErreurAdresseMailInvalide'

export default class AdresseMail extends ObjetValeur {
  constructor(private readonly adresseMail: string) {
    super()
    this.validerObjet()
  }

  protected validerObjet() {
    if (!this.stringEstExistante(this.adresseMail)) throw new ErreurAdresseMailRequise()
    const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if (!emailRegex.test(this.adresseMail)) throw new ErreurAdresseMailInvalide()
  }

  get valeur() {
    return this.adresseMail
  }
}
