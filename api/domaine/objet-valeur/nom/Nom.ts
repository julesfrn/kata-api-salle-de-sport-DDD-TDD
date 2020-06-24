import ObjetValeur from "../ObjetValeur";
import ErreurNomRequis from "./erreurs/ErreurNomRequis";

export default class Nom extends ObjetValeur {
  constructor(private readonly nom: string) {
    super()
    this.validerObjet()
  }

  protected validerObjet() {
    if (!this.stringEstExistante(this.nom)) throw new ErreurNomRequis()
  }

  get valeur() {
    return this.nom
  }
}