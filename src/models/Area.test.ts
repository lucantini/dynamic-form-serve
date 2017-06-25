import Area from "./Area";
import Field from "./Field";

describe("Area", () => {

  test("Fill area attributes", () => {

    const area = new Area();

    area
      .setId("abacate")
      .setTitle("Abacate");

    expect(area.getAttributes()).toEqual({
      id: "abacate",
      title: "Abacate"
    });

    expect(area.getId()).toEqual("abacate");
    expect(area.getTitle()).toEqual("Abacate");
  });

  test("Build json for field", () => {

    const area = new Area();

    area
      .setId("abacate")
      .setTitle("Abacate")
      .newField((field: Field) => {

        field
          .setId("field_1")
          .setLabel("Field 1");

        return field;
      });

    const json = area.toJson();

    expect(json).toHaveProperty('id', 'abacate');
    expect(json).toHaveProperty('title', 'Abacate');
    expect(json).toHaveProperty('fields');
    expect(json.fields).toHaveLength(1);
  });
});