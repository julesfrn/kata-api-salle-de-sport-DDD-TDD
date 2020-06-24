import ErreurDomaine from '../../../ErreurDomaine'

export default class ErreurAdresseMailRequise extends ErreurDomaine {
  constructor() {
    super(`Une adresse mail est requise`)
  }
}
