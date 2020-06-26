import Abonnement from '../domaine/entitees/Abonnement'

export interface IAbonnementRepository {
  recupererViaLaReference(reference: string): Abonnement | null
}

export default class AbonnementRepository implements IAbonnementRepository {
  recupererViaLaReference(reference: string) {
    if (reference === 'reference') return null
    return new Abonnement({
      reference,
      nom: `Opération corps d'été`,
      prixMensuel: 45
    })
  }
}
