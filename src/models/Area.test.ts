import Area from "./Area";
import Field from "./Field";

describe("Area", () => {

    test("Fill area attributes", () => {
        
        let area = new Area();

        area
            .setId('abacate')
            .setTitle('Abacate');

        expect(area.getAttributes()).toEqual({
            id : "abacate",
            title : "Abacate"
        });

        expect(area.getId()).toEqual('abacate');
        expect(area.getTitle()).toEqual('Abacate');
    });

    test("Build json for field", () => {
        
        let area = new Area();
        
        area
            .setId('abacate')
            .setTitle('Abacate')
            .newField((field: Field) => {
                
                field
                    .setId('field_1')
                    .setLabel('Field 1');

                return field;
            });

        expect(area.toJson()).toEqual({
            id : 'abacate',
            title : 'Abacate',
            fields : [
                {
                    id : "field_1",
                    label : "Field 1"
                }
            ]
        });
    });
});