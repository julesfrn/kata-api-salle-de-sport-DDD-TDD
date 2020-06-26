import ErreurDomaine from '../../../ErreurDomaine'

export default class ErreurSexeNonValide extends ErreurDomaine {
  constructor() {
    super(`Le sexe doit être "femme", "homme" ou "autre"`)
  }
}
