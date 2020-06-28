import Formule, { IPropsFormule } from './domaine/entitees/Formule'
import { IFormuleRepository } from './infrastructure/FormuleRepository'

export default class CreerUneFormule {
  // eslint-disable-next-line no-useless-constructor, no-empty-function
  constructor(private readonly formuleRepository: IFormuleRepository) {}

  execute(props: IPropsFormule) {
    const formuleExistant = this.formuleRepository.recupererViaLaReference(props.reference)
    if (formuleExistant === null) throw new Error('La référence existe déjà')
    return new Formule(props)
  }
}
