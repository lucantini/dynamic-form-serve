import { Jsonable } from "../json/Jsonable";
import JsonHelper from "../json/JsonHelper";
import { Model } from "./Model";
import Field from "./Field";
import Area from "./Area";

export default class Form extends Model implements Jsonable {
    
    private areas: Array<Area>;

    private fields: Array<Field>; 

    constructor() {
        super();

        this.areas = new Array();
        this.fields = new Array();
    }
    protected attributesToInitialize(): Array<string> {
        return ['id', 'title'];
    }

    public setId(id: string) : this {
        return this.setAttribute('id', id);
    }

    public setTitle(title: string) : this {
        return this.setAttribute('title', title);
    }

    public getId() : string {
        return this.getAttribute('id');
    }

    public getTitle() : string {
        return this.getAttribute('title');
    }

    public newField(callback: any): this {
        const field = new Field();
        this.fields.push(callback(field));

        return this;
    }

    public newArea(callback: any): this {
        const area = new Area();
        this.areas.push(callback(area));        
        return this;
    }

    public toJson(): Object {
        return { 
            ...this.getAttributes(),
            fields: JsonHelper.fromList(this.fields),
            areas: JsonHelper.fromList(this.areas)
        }
    }
}