import { Jsonable } from "../json/Jsonable";
import { Model } from "./Model";
import Field from "./Field";

export default class Area extends Model implements Jsonable {
    
    protected fields : Array<Field>;

    constructor() {
        super();
        this.fields = new Array();
    }

    protected attributesToInitialize() : Array<string> {
        return ['id', 'title'];
    }

    public setId(id : string) : this {
        return this.setAttribute('id', id);
    }

    public getId() : string {
        return this.getAttribute('id');
    }

    public setTitle(title : string) : this {
        return this.setAttribute('title', title);
    }

    public getTitle() : string {
        return this.getAttribute('title');
    }

    public newField(callback: any) : this {
        let field = new Field();        
        this.fields.push(callback(field));

        return this;
    }

    private fieldsToJson() : Array<Object> {
        return this.fields.map((field : Jsonable) => {
            return field.toJson();
        });
    }

    public toJson(): Object {
        let json = Object.assign(
            {}, 
            this.getAttributes(),
            {fields : this.fieldsToJson()}
        );

        return json;
    }
}