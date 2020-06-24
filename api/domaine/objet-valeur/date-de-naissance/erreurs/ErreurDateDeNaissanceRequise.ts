import ErreurDomaine from '../../../ErreurDomaine'

export default class ErreurDateDeNaissanceRequise extends ErreurDomaine {
  constructor() {
    super(`Une date de naissance est requise`)
  }
}
