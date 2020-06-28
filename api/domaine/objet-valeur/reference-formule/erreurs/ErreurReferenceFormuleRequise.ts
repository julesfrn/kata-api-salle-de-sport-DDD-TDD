import ErreurDomaine from '../../../ErreurDomaine'

export default class ErreurReferenceFormuleRequise extends ErreurDomaine {
  constructor() {
    super(`Une référence de formule est requise`)
  }
}
