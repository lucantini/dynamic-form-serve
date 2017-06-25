export abstract class Model {

  private attributes: Object;

  constructor() {
    this.attributes = Object();
    this.initializeAttributes();
  }

  /**
   * Set or update attribute value passed by param
   *
   * @param attribute
   * @param value
   */
  protected setAttribute(attribute: string, value: any): this {
    this.attributes[attribute] = value;
    return this;
  }

  /**
   * Get attribute value passed by param
   *
   * @param attribute
   * @param default_value
   */
  protected getAttribute(attribute: string, default_value: any = null): any {
    return this.attributes[attribute] ? this.attributes[attribute] : default_value;
  }

  public getAttributes(): Object {
    return this.attributes;
  }

  protected attributesToInitialize(): Array<string> {
    return [];
  }

  /**
   * Initialize default attributes
   */
  private initializeAttributes(): void {
    this.attributesToInitialize().forEach(attribute => this.setAttribute(attribute, null));
  }
}