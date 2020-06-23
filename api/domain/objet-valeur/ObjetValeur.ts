export default abstract class ObjetValeur {
  protected abstract validerObjet(): void

  protected stringEstExistante(string: string) {
    return !(string == null || string === '')
  }
}
