import { expect } from 'chai'
import Client, { IPropsClient } from '../api/domaine/entitees/Client'
import ErreurDomaine from '../api/domaine/ErreurDomaine'

describe('DOMAINE | Client', () => {
  let client: Client | undefined
  let erreurDomaine: ErreurDomaine | undefined
  let propsClient: IPropsClient
  beforeEach(() => {
    erreurDomaine = undefined
    propsClient = {
      referenceAbonnement: 'abonnement1',
      nom: 'Michel Dupont',
      sexe: 'homme',
      dateDeNaissance: new Date(1997, 10, 24),
      adresseMail: 'michel.dupont@mail.com',
      estEtudiant: true
    }
  })
  describe(`avec un type d'abonnement, un nom, un sexe, une date de naissance, une adresse mail et un boolean indiquant si le client est étudiant`, () => {
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
  describe(`sans type d'abonnement`, () => {
    it('renvoie une erreur: abonnement requis', () => {
      delete propsClient.referenceAbonnement
      try {
        client = new Client(propsClient)
      } catch (err) {
        erreurDomaine = err
      }
      expect(erreurDomaine?.message).to.eq(`Une référence d'abonnement est requise`)
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
})
