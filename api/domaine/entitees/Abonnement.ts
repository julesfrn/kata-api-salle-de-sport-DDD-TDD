import ReferenceAbonnement from '../objet-valeur/reference-abonnement/ReferenceAbonnement'
import Nom from '../objet-valeur/nom/Nom'
import PrixMensuel from '../objet-valeur/prix-mensuel/PrixMensuel'

export interface IPropsAbonnement {
  reference: string
  nom: string
  prixMensuel: number
}

export default class Abonnement {
  public readonly reference: ReferenceAbonnement
  public readonly nom: Nom
  public prixMensuel: PrixMensuel

  constructor(props: IPropsAbonnement) {
    this.reference = new ReferenceAbonnement(props.reference)
    this.nom = new Nom(props.nom)
    this.prixMensuel = new PrixMensuel(props.prixMensuel)
  }

  recupererLePrixPourUnClientQui(estEtudiant: boolean, payeALAnnee: boolean): number {
    let prix = this.prixMensuel.valeur
    if (payeALAnnee) prix = 12 * (prix - prix * 0.3)
    if (estEtudiant) prix -= prix * 0.2
    return prix
  }

  changerLePrix(nouveauPrix: number) {
    this.prixMensuel = new PrixMensuel(nouveauPrix)
  }
}
