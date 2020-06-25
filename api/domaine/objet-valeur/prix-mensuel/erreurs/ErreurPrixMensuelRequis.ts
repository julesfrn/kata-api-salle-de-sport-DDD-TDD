import ErreurDomaine from '../../../ErreurDomaine'

export default class ErreurPrixMensuelRequis extends ErreurDomaine {
  constructor() {
    super('Un prix mensuel est requis')
  }
}
