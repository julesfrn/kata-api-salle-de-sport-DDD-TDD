import ErreurDomaine from '../../../ErreurDomaine'

export default class ErreurAdresseMailInvalide extends ErreurDomaine {
  constructor() {
    super(`L'adresse mail n'est pas valide`)
  }
}
