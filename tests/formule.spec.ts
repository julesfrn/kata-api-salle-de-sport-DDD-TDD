import { expect } from 'chai'

import Formule, { IPropsFormule } from '../api/domaine/entitees/Formule'
import ErreurDomaine from '../api/domaine/ErreurDomaine'
import CreerUneFormule from '../api/CreerUneFormule'
import FormuleRepository from '../api/infrastructure/FormuleRepository'

describe('DOMAINE | Formule', () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let formule: Formule | undefined
  let erreurDomaine: ErreurDomaine | undefined
  let propsFormule: IPropsFormule
  const formuleRepository = new FormuleRepository()
  beforeEach(() => {
    erreurDomaine = undefined
    propsFormule = {
      reference: 'operation_ete_2020',
      nom: `Opération corps d'été`,
      prixMensuel: 45
    }
  })
  describe(`avec une référence, un nom, et un prix mensuel`, () => {
    it('créer une nouvelle formule', () => {
      try {
        const creerUneFormule = new CreerUneFormule(formuleRepository)
        creerUneFormule.execute(propsFormule)
      } catch (err) {
        erreurDomaine = err
      }
      expect(erreurDomaine).to.be.undefined
    })
  })
  describe(`sans référence`, () => {
    it('renvoie une erreur: référence requise', () => {
      delete propsFormule.reference
      try {
        formule = new Formule(propsFormule)
      } catch (err) {
        erreurDomaine = err
      }
      expect(erreurDomaine?.message).to.eq(`Une référence de formule est requise`)
    })
  })
  describe(`sans nom`, () => {
    it('renvoie une erreur: nom requis', () => {
      delete propsFormule.nom
      try {
        formule = new Formule(propsFormule)
      } catch (err) {
        erreurDomaine = err
      }
      expect(erreurDomaine?.message).to.eq(`Un nom est requis`)
    })
  })
  describe('sans prix mensuel', () => {
    it('renvoie une erreur: prix mensuel requis', () => {
      delete propsFormule.prixMensuel
      try {
        formule = new Formule(propsFormule)
      } catch (err) {
        erreurDomaine = err
      }
      expect(erreurDomaine?.message).to.eq('Un prix mensuel est requis')
    })
  })
  describe(`avec un prix mensuel inférieur à 0`, () => {
    it('renvoie une erreur: prix mensuel invalide', () => {
      propsFormule.prixMensuel = -10
      try {
        formule = new Formule(propsFormule)
      } catch (err) {
        erreurDomaine = err
      }
      expect(erreurDomaine?.message).to.eq('Un prix mensuel doit être un nombre supérieur ou égal à 0')
    })
  })
  describe(`avec un prix mensuel qui n'est pas un nombre`, () => {
    it('renvoie une erreur: prix mensuel invalide', () => {
      // @ts-ignore
      propsFormule.prixMensuel = '10'
      try {
        formule = new Formule(propsFormule)
      } catch (err) {
        erreurDomaine = err
      }
      expect(erreurDomaine?.message).to.eq('Un prix mensuel doit être un nombre supérieur ou égal à 0')
    })
  })
  it('je ne peux pas créer une formule avec une référence qui existe déjà', () => {
    let erreur = null
    const referenceDejaExistante = 'reference'
    propsFormule.reference = referenceDejaExistante
    try {
      const creerUneFormule = new CreerUneFormule(formuleRepository)
      creerUneFormule.execute(propsFormule)
    } catch (err) {
      erreur = err
    }
    expect(erreur?.message).to.eq('La référence existe déjà')
  })
})
