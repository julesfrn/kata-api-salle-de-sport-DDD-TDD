import ErreurDomaine from '../../../ErreurDomaine'

export default class ErreurPrixMensuelInvalide extends ErreurDomaine {
  constructor() {
    super('Un prix mensuel doit être un nombre supérieur ou égal à 0')
  }
}
