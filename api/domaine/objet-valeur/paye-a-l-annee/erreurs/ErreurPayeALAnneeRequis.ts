import ErreurDomaine from '../../../ErreurDomaine'

export default class ErreurPayeALAnneeRequis extends ErreurDomaine {
  constructor() {
    super(`Il est requis d'indiquer si le client paye à l'année ou non`)
  }
}
