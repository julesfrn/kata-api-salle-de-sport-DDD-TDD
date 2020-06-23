import ReferenceAbonnement from "../objet-valeur/reference-abonnement/ReferenceAbonnement"

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
  public readonly nom: string
  public readonly sexe: string
  public readonly dateDeNaissance: Date
  public readonly adresseMail: string
  public readonly estEtudiant: boolean

  constructor(props: IPropsClient) {
    this.referenceAbonnement = new ReferenceAbonnement(props.referenceAbonnement)
    this.nom = props.nom
    this.sexe = props.sexe
    this.dateDeNaissance = props.dateDeNaissance
    this.adresseMail = props.adresseMail
    this.estEtudiant = props.estEtudiant
  }
}
