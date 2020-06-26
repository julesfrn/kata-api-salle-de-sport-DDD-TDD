import { expect } from 'chai'

import Abonnement, { IPropsAbonnement } from '../api/domaine/entitees/Abonnement'
import ErreurDomaine from '../api/domaine/ErreurDomaine'
import CreerUnAbonnement from '../api/CreerUnAbonnement'
import AbonnementRepository from '../api/infrastructure/AbonnementRepository'

describe('DOMAINE | Abonnement', () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let abonnement: Abonnement | undefined
  let erreurDomaine: ErreurDomaine | undefined
  let propsAbonnement: IPropsAbonnement
  const abonnementRepository = new AbonnementRepository()
  beforeEach(() => {
    erreurDomaine = undefined
    propsAbonnement = {
      reference: 'operation_ete_2020',
      nom: `Opération corps d'été`,
      prixMensuel: 45
    }
  })
  describe(`avec une référence, un nom, et un prix mensuel`, () => {
    it('instancie le nouvel abonnement', () => {
      try {
        const creerUnAbonnement = new CreerUnAbonnement(abonnementRepository)
        creerUnAbonnement.execute(propsAbonnement)
      } catch (err) {
        erreurDomaine = err
      }
      expect(erreurDomaine).to.be.undefined
    })
  })
  describe(`sans référence`, () => {
    it('renvoie une erreur: référence requise', () => {
      delete propsAbonnement.reference
      try {
        abonnement = new Abonnement(propsAbonnement)
      } catch (err) {
        erreurDomaine = err
      }
      expect(erreurDomaine?.message).to.eq(`Une référence d'abonnement est requise`)
    })
  })
  describe(`sans nom`, () => {
    it('renvoie une erreur: nom requis', () => {
      delete propsAbonnement.nom
      try {
        abonnement = new Abonnement(propsAbonnement)
      } catch (err) {
        erreurDomaine = err
      }
      expect(erreurDomaine?.message).to.eq(`Un nom est requis`)
    })
  })
  describe('sans prix mensuel', () => {
    it('renvoie une erreur: prix mensuel requis', () => {
      delete propsAbonnement.prixMensuel
      try {
        abonnement = new Abonnement(propsAbonnement)
      } catch (err) {
        erreurDomaine = err
      }
      expect(erreurDomaine?.message).to.eq('Un prix mensuel est requis')
    })
  })
  describe(`avec un prix mensuel inférieur à 0`, () => {
    it('renvoie une erreur: prix mensuel invalide', () => {
      propsAbonnement.prixMensuel = -10
      try {
        abonnement = new Abonnement(propsAbonnement)
      } catch (err) {
        erreurDomaine = err
      }
      expect(erreurDomaine?.message).to.eq('Un prix mensuel doit être un nombre supérieur ou égal à 0')
    })
  })
  describe(`avec un prix mensuel qui n'est pas un nombre`, () => {
    it('renvoie une erreur: prix mensuel invalide', () => {
      // @ts-ignore
      propsAbonnement.prixMensuel = '10'
      try {
        abonnement = new Abonnement(propsAbonnement)
      } catch (err) {
        erreurDomaine = err
      }
      expect(erreurDomaine?.message).to.eq('Un prix mensuel doit être un nombre supérieur ou égal à 0')
    })
  })
  it('je ne peux pas créer un abonnement avec une référence qui existe déjà', () => {
    let erreur = null
    const referenceDejaExistante = 'reference'
    propsAbonnement.reference = referenceDejaExistante
    try {
      const creerUnAbonnement = new CreerUnAbonnement(abonnementRepository)
      creerUnAbonnement.execute(propsAbonnement)
    } catch (err) {
      erreur = err
    }
    expect(erreur?.message).to.eq('La référence existe déjà')
  })
})
