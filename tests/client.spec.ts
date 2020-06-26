import { expect } from 'chai'

import Client, { IPropsClient } from '../api/domaine/entitees/Client'
import ErreurDomaine from '../api/domaine/ErreurDomaine'
import Abonnement, { IPropsAbonnement } from '../api/domaine/entitees/Abonnement'

describe('DOMAINE | Client', () => {
  let client: Client | undefined
  let erreurDomaine: ErreurDomaine | undefined
  let propsClient: IPropsClient
  beforeEach(() => {
    erreurDomaine = undefined
    propsClient = {
      nom: 'Michel Dupont',
      sexe: 'homme',
      dateDeNaissance: new Date(1997, 10, 24),
      adresseMail: 'michel.dupont@mail.com',
      estEtudiant: false,
      payeALAnnee: false
    }
  })
  describe(`avec un nom, un sexe, une date de naissance, une adresse mail et un boolean indiquant si le client est étudiant`, () => {
    it('instancie le nouveau client', () => {
      try {
        client = new Client(propsClient)
      } catch (err) {
        erreurDomaine = err
      }
      expect(client).to.exist
      expect(erreurDomaine).to.be.undefined
    })
  })
  describe('sans nom', () => {
    it('renvoie une erreur: nom requis', () => {
      delete propsClient.nom
      try {
        client = new Client(propsClient)
      } catch (err) {
        erreurDomaine = err
      }
      expect(erreurDomaine?.message).to.eq(`Un nom est requis`)
    })
  })
  describe('sans sexe', () => {
    it('renvoie une erreur: sexe requis', () => {
      delete propsClient.sexe
      try {
        client = new Client(propsClient)
      } catch (err) {
        erreurDomaine = err
      }
      expect(erreurDomaine?.message).to.eq(`Un sexe est requis`)
    })
  })
  describe(`avec un sexe qui n'est pas "femme", "homme" ou "autre"`, () => {
    it('renvoie une erreur: Le sexe doit être "femme", "homme" ou "autre"', () => {
      propsClient.sexe = 'sexeNonValide'
      try {
        client = new Client(propsClient)
      } catch (err) {
        erreurDomaine = err
      }
      expect(erreurDomaine?.message).to.eq(`Le sexe doit être "femme", "homme" ou "autre"`)
    })
  })
  describe('sans date de naissance', () => {
    it('renvoie une erreur: date de naissance requise', () => {
      delete propsClient.dateDeNaissance
      try {
        client = new Client(propsClient)
      } catch (err) {
        erreurDomaine = err
      }
      expect(erreurDomaine?.message).to.eq(`Une date de naissance est requise`)
    })
  })
  describe('avec une date de naissance non valide (âge inférieur à 16 ans)', () => {
    it('renvoie une erreur: date de naissance non valide', () => {
      propsClient.dateDeNaissance = new Date(2014, 10, 24)
      try {
        client = new Client(propsClient)
      } catch (err) {
        erreurDomaine = err
      }
      expect(erreurDomaine?.message).to.eq(
        `La date de naissance n'est pas valide, le client doit être âgé d'au moins 16 ans`
      )
    })
  })
  describe('sans adresse mail', () => {
    it('renvoie une erreur: adresse mail requise', () => {
      delete propsClient.adresseMail
      try {
        client = new Client(propsClient)
      } catch (err) {
        erreurDomaine = err
      }
      expect(erreurDomaine?.message).to.eq(`Une adresse mail est requise`)
    })
  })
  describe('avec une adresse mail non valide', () => {
    it('renvoie une erreur: date de naissance non valide', () => {
      propsClient.adresseMail = 'adresseMailNonValide'
      try {
        client = new Client(propsClient)
      } catch (err) {
        erreurDomaine = err
      }
      expect(erreurDomaine?.message).to.eq(`L'adresse mail n'est pas valide`)
    })
  })
  describe('sans boolean indiquant si le client est étudiant', () => {
    it('renvoie une erreur: information indiquant si le client est étudiant requise', () => {
      delete propsClient.estEtudiant
      try {
        client = new Client(propsClient)
      } catch (err) {
        erreurDomaine = err
      }
      expect(erreurDomaine?.message).to.eq(`Il est requis d'indiquer si le client est étudiant ou non`)
    })
  })
  describe(`sans boolean indiquant si le client paye a l'année`, () => {
    it(`renvoie une erreur: information indiquant si le client paye a l'année requise`, () => {
      delete propsClient.payeALAnnee
      try {
        client = new Client(propsClient)
      } catch (err) {
        erreurDomaine = err
      }
      expect(erreurDomaine?.message).to.eq(`Il est requis d'indiquer si le client paye à l'année ou non`)
    })
  })
  describe('associer un abonnement à un client', () => {
    let abonnement: Abonnement
    const propsAbonnement: IPropsAbonnement = {
      reference: 'operation_ete_2020',
      nom: `Opération corps d'été`,
      prixMensuel: 45
    }
    describe(`qui paye au mois et qui n'est pas étudiant`, () => {
      it(`associe un abonnement avec le prix de base de l'abonnement, sa référence et son nom`, () => {
        client = new Client(propsClient)
        abonnement = new Abonnement(propsAbonnement)
        client.associerAbonnement(abonnement)
        const abonnementAssocieAttendu = {
          reference: 'operation_ete_2020',
          nom: `Opération corps d'été`,
          prix: 45
        }
        expect(client.abonnement).to.deep.eq(abonnementAssocieAttendu)
      })
    })
    describe(`qui paye à l'année et qui n'est pas étudiant`, () => {
      it('associe un abonnement avec une réduction de 30% sur le prix mensuel multiplié par 12, sa référence et son nom', () => {
        propsClient.payeALAnnee = true
        propsClient.estEtudiant = false
        client = new Client(propsClient)
        abonnement = new Abonnement(propsAbonnement)
        client.associerAbonnement(abonnement)
        const abonnementAssocieAttendu = {
          reference: 'operation_ete_2020',
          nom: `Opération corps d'été`,
          prix: (propsAbonnement.prixMensuel - propsAbonnement.prixMensuel * 0.3) * 12
        }
        expect(client.abonnement).to.deep.eq(abonnementAssocieAttendu)
      })
    })
    describe(`qui paye au mois et qui est étudiant`, () => {
      it('associe un abonnement avec une réduction de 20% sur le prix, sa référence et son nom', () => {
        propsClient.payeALAnnee = false
        propsClient.estEtudiant = true
        client = new Client(propsClient)
        abonnement = new Abonnement(propsAbonnement)
        client.associerAbonnement(abonnement)
        const abonnementAssocieAttendu = {
          reference: 'operation_ete_2020',
          nom: `Opération corps d'été`,
          prix: propsAbonnement.prixMensuel - propsAbonnement.prixMensuel * 0.2
        }
        expect(client.abonnement).to.deep.eq(abonnementAssocieAttendu)
      })
    })
    describe(`qui paye a l'annee et qui est étudiant`, () => {
      it('associe un abonnement avec une réduction de 30% sur le prix mensuel multiplié par 12 puis une réduction de 20% sur ce prix total, sa référence et son nom', () => {
        propsClient.payeALAnnee = true
        propsClient.estEtudiant = true
        client = new Client(propsClient)
        abonnement = new Abonnement(propsAbonnement)
        client.associerAbonnement(abonnement)
        const abonnementAssocieAttendu = {
          reference: 'operation_ete_2020',
          nom: `Opération corps d'été`,
          prix:
            (propsAbonnement.prixMensuel - propsAbonnement.prixMensuel * 0.3) * 12 -
            (propsAbonnement.prixMensuel - propsAbonnement.prixMensuel * 0.3) * 12 * 0.2
        }
        expect(client.abonnement).to.deep.eq(abonnementAssocieAttendu)
      })
    })
  })
})
