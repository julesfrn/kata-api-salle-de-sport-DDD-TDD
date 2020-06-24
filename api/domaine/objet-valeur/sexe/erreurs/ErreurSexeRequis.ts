import ErreurDomaine from '../../../ErreurDomaine'

export default class ErreurSexeRequis extends ErreurDomaine {
  constructor() {
    super(`Un sexe est requis`)
  }
}