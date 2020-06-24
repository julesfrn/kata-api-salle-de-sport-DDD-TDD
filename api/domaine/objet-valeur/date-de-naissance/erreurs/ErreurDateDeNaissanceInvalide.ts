import ErreurDomaine from '../../../ErreurDomaine'

export default class ErreurDateDeNaissanceInvalide extends ErreurDomaine {
  constructor() {
    super(`La date de naissance n'est pas valide, le client doit être âgé d'au moins 16 ans`)
  }
}
