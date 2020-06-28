import Formule from '../domaine/entitees/Formule'

export interface IFormuleRepository {
  recupererViaLaReference(reference: string): Formule | null
}

export default class FormuleRepository implements IFormuleRepository {
  recupererViaLaReference(reference: string) {
    if (reference === 'reference') return null
    return new Formule({
      reference,
      nom: `Opération corps d'été`,
      prixMensuel: 45
    })
  }
}
