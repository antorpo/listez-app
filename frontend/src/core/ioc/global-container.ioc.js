import { Container } from "./container.ioc";

export class GlobalContainer {
  static _container;

  static getContainer() {
    if (this._container == null) {
      this._container = new Container();
    }

    return this._container;
  }


  static resetContainer() {
      this._container = new Container();
      return this._container;
  }
}
