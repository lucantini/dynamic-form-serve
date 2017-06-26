import { Jsonable } from "./Jsonable";


export const fromObject = (jsonable: Jsonable): Object => {
  return jsonable.toJson();
}

export const fromList = (list: Array<Jsonable>): Array<Object> => {
  return list.map((jsonable: Jsonable) => {
    return fromObject(jsonable);
  });
}
