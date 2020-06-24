import ErreurDomaine from "../../../ErreurDomaine";

export default class ErreurNomRequis extends ErreurDomaine {
  constructor() {
    super('Un nom est requis')
  }
}