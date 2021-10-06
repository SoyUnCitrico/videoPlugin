export default class Singleton {
  private static instance: Singleton;
  
  private constructor(){

  }

  static getInstance() {
    if(!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;XPathExpression
  }
}

// Exponer una sola instancia
// por ejemplo solo un modal a la vez