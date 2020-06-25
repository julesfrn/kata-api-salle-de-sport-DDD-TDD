import ReferenceAbonnement from '../objet-valeur/reference-abonnement/ReferenceAbonnement'
import Nom from '../objet-valeur/nom/Nom'
import Sexe from '../objet-valeur/sexe/Sexe'
import DateDeNaissance from '../objet-valeur/date-de-naissance/DateDeNaissance'
import AdresseMail from '../objet-valeur/adresse-mail/AdresseMail'
import EstEtudiant from '../objet-valeur/est-etudiant/EstEtudiant'
import PayeALAnnee from '../objet-valeur/paye-a-l-annee/PayeALAnnee'
import Abonnement from './Abonnement'

export interface IAbonnementClient {
  reference?: string
  nom?: string
  prix?: number
}
export interface IPropsClient {
  nom: string
  sexe: string
  dateDeNaissance: Date
  adresseMail: string
  estEtudiant: boolean
  payeALAnnee: boolean
  abonnement?: IAbonnementClient
}

export default class Client {
  public readonly nom: Nom
  public readonly sexe: Sexe
  public readonly dateDeNaissance: DateDeNaissance
  public readonly adresseMail: AdresseMail
  public readonly estEtudiant: EstEtudiant
  public readonly payeALAnnee: PayeALAnnee
  public abonnement: IAbonnementClient

  constructor(props: IPropsClient) {
    this.nom = new Nom(props.nom)
    this.sexe = new Sexe(props.sexe)
    this.dateDeNaissance = new DateDeNaissance(props.dateDeNaissance)
    this.adresseMail = new AdresseMail(props.adresseMail)
    this.estEtudiant = new EstEtudiant(props.estEtudiant)
    this.payeALAnnee = new PayeALAnnee(props.payeALAnnee)
    this.abonnement = props.abonnement || {}
  }

  associerAbonnement(abonnement: Abonnement) {
    const reference = abonnement.reference.valeur
    const nom = abonnement.nom.valeur
    const prix = abonnement.recupererLePrixPourUnClientQui(this.estEtudiant.valeur, this.payeALAnnee.valeur)
    this.abonnement = { reference, nom, prix }
  }
}
