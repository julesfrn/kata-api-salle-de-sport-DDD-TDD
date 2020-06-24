export default abstract class ObjetValeur {
  abstract get valeur(): any

  protected abstract validerObjet(): void

  protected stringEstExistante(string: string) {
    return !(string == null || string === '')
  }
}
