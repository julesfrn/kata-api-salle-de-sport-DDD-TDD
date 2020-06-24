import ErreurDomaine from '../../../ErreurDomaine'

export default class ErreurReferenceAbonnementRequise extends ErreurDomaine {
  constructor() {
    super(`Une référence d'abonnement est requise`)
  }
}
