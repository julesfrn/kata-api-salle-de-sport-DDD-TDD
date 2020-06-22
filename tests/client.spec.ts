import { expect } from "chai"

class Client {
  constructor() {
    throw new ErreurDomaine('Il y a eu une erreur')
  }
}

class ErreurDomaine extends Error {
  constructor(public readonly message: string) {
    super(message)
  }
}

describe('un nouveau client', () => {
  describe(`avec un type d'abonnement, un nom, un sexe, une date de naissance, une adresse mail et un numéro de téléphone`, () => {
    it('instancie le nouveau client', () => {
      let client: Client | undefined
      let erreur: ErreurDomaine | undefined
      try {
        client = new Client()
      } catch (err) {
        erreur = err
      }
      expect(client).to.exist
      expect(erreur).to.be.undefined
    })
  })
})