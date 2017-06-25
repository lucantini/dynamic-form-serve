import { Jsonable } from "../json/Jsonable";
import JsonHelper from "../json/JsonHelper";
import { Model } from "./Model";
import Field from "./Field";

export default class Area extends Model implements Jsonable {

  protected fields: Array<Field>;

  constructor() {
    super();
    this.fields = new Array();
  }

  protected attributesToInitialize(): Array<string> {
    return ["id", "title"];
  }

  public setId(id: string): this {
    return this.setAttribute("id", id);
  }

  public getId(): string {
    return this.getAttribute("id");
  }

  public setTitle(title: string): this {
    return this.setAttribute("title", title);
  }

  public getTitle(): string {
    return this.getAttribute("title");
  }

  public newField(callback: any): this {
    const field = new Field();
    this.fields.push(callback(field));

    return this;
  }

  public toJson(): Object {
    return {
      ...this.getAttributes(),
      fields: JsonHelper.fromList(this.fields)
    };
  }
}