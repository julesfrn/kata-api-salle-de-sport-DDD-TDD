import Abonnement, { IPropsAbonnement } from './domaine/entitees/Abonnement'
import { IAbonnementRepository } from './infrastructure/AbonnementRepository'

export default class CreerUnAbonnement {
  // eslint-disable-next-line no-useless-constructor, no-empty-function
  constructor(private readonly abonnementRepository: IAbonnementRepository) {}

  execute(props: IPropsAbonnement) {
    const abonnementExistant = this.abonnementRepository.recupererViaLaReference(props.reference)
    if (abonnementExistant === null) throw new Error('La référence existe déjà')
    return new Abonnement(props)
  }
}
