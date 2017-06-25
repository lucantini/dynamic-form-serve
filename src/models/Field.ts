import { Jsonable } from "../json/Jsonable";
import { Model } from "./Model";

export default class Field extends Model implements Jsonable {

    protected attributesToInitialize() : Array<string> {
        return ['id', 'label'];
    }

    public setId(value : string) : this {
        return this.setAttribute('id', value);
    }

    public getId() : string {
        return this.getAttribute("id");
    }

    public setLabel(label : string) : this {
        return this.setAttribute('label', label);
    }

    public getLabel() : string {
        return this.getAttribute('label');
    }

    public toJson(): Object {
        let json = Object.assign(
            {}, 
            this.getAttributes()
        );

        return json;
    }
}