import ErreurDomaine from '../../../ErreurDomaine'

export default class ErreurEstEtudiantRequis extends ErreurDomaine {
  constructor() {
    super(`Il est requis d'indiquer si le client est étudiant ou non`)
  }
}
