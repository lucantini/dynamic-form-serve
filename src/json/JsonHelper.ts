import { Jsonable } from "./Jsonable";

export default class JsonHelper {
    public static fromList(list: Array<Jsonable>): Array<Object> {
        return list.map((jsonable: Jsonable) => {
            return JsonHelper.fromObject(jsonable);
        });
    }

    public static fromObject(jsonable: Jsonable): Object {
        return jsonable.toJson();
    }
}