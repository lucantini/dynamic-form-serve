import Field from "./Field";

describe("Field", () => {

  test("Fill fields attributes", () => {

    const field = new Field();

    field.setId("abacate");

    expect(field.getAttributes()).toEqual({
      id: "abacate",
      label: null
    });

    expect(field.getId()).toEqual("abacate");
  });

  test("Get default value for attribute", () => {

    const field = new Field();

    expect(field.getId()).toEqual(null);
  });

  test("Build json for field", () => {

    const field = new Field();

    field
      .setId("abacate")
      .setLabel("abacate_label");

    expect(field.toJson()).toEqual({
      id: "abacate",
      label: "abacate_label"
    });
  });
});