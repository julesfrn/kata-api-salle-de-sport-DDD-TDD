import ReferenceAbonnement from '../objet-valeur/reference-abonnement/ReferenceAbonnement'
import Nom from '../objet-valeur/nom/Nom'
import Sexe from '../objet-valeur/sexe/Sexe'
import DateDeNaissance from '../objet-valeur/date-de-naissance/DateDeNaissance'
import AdresseMail from '../objet-valeur/adresse-mail/AdresseMail'
import EstEtudiant from '../objet-valeur/est-etudiant/EstEtudiant'

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
  public readonly sexe: Sexe
  public readonly dateDeNaissance: DateDeNaissance
  public readonly adresseMail: AdresseMail
  public readonly estEtudiant: EstEtudiant

  constructor(props: IPropsClient) {
    this.referenceAbonnement = new ReferenceAbonnement(props.referenceAbonnement)
    this.nom = new Nom(props.nom)
    this.sexe = new Sexe(props.sexe)
    this.dateDeNaissance = new DateDeNaissance(props.dateDeNaissance)
    this.adresseMail = new AdresseMail(props.adresseMail)
    this.estEtudiant = new EstEtudiant(props.estEtudiant)
  }
}
