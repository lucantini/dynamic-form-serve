import { Jsonable } from "../json/Jsonable";

export default class Field implements Jsonable {

    private attributes : Object;

    constructor() {
        this.attributes = Object();
        this.initializeAttributes();
    }

    /**
     * Initialize default attributes
     */
    private initializeAttributes() : void {
        ['id', 'label'].forEach(attribute => this.setAttribute(attribute, null));
    }

    /**
     * Set or update attribute value passed by param
     * 
     * @param attribute 
     * @param value 
     */
    private setAttribute(attribute : string, value : any) : Field {
        this.attributes[attribute] = value;
        return this;
    }

    /**
     * Get attribute value passed by param
     * 
     * @param attribute 
     * @param default_value 
     */
    private getAttribute(attribute : string, default_value: any = null) : any {
        return this.attributes[attribute] ? this.attributes[attribute] : default_value;
    }

    public getAttributes() : Object {
        return this.attributes;
    }

    public setId(value : string) : Field {
        return this.setAttribute('id', value);
    }

    public getId() : string {
        return this.getAttribute("id");
    }

    public setLabel(label : string) : Field {
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