import ReferenceAbonnement from "../objet-valeur/reference-abonnement/ReferenceAbonnement"
import Nom from "../objet-valeur/nom/Nom"

export interface IPropsClient {
  referenceAbonnement: string
  nom: string
  sexe: string
  dateDeNaissance: Date
  adresseMail: string
  estEtudiant: boolean
}

export default class Client {
  public readonly referenceAbonnement: ReferenceAbonnement
  public readonly nom: Nom
  public readonly sexe: string
  public readonly dateDeNaissance: Date
  public readonly adresseMail: string
  public readonly estEtudiant: boolean

  constructor(props: IPropsClient) {
    this.referenceAbonnement = new ReferenceAbonnement(props.referenceAbonnement)
    this.nom = new Nom(props.nom)
    this.sexe = props.sexe
    this.dateDeNaissance = props.dateDeNaissance
    this.adresseMail = props.adresseMail
    this.estEtudiant = props.estEtudiant
  }
}
