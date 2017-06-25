import Form from './Form';
import Area from './Area';
import Field from './Field';

describe('Form', () => {

    test('Form fill attributes', () => {
        
        const form = new Form();
        
        form
            .setId('abacate')
            .setTitle('Abacate');

        expect(form.getAttributes()).toEqual({
            id: 'abacate',
            title: 'Abacate'
        });
    });

    test('Build json for form', () => {
        
        const form = new Form();
        
        form
            .setId('form_1')
            .setTitle('Form 1')
            .newArea((area: Area) => {
                area
                    .setId('area_1')
                    .setTitle('Area 1')
                    .newField((field: Field) => {
                        field
                            .setId('field_2')
                            .setLabel('Field 2');

                        return field;
                    });

                return area;
            })
            .newField((field: Field) => {
                field
                    .setId('field_2')
                    .setLabel('Field 2');

                return field;
            });

        const json = form.toJson();

        expect(json).toHaveProperty('id', 'form_1');
        expect(json).toHaveProperty('title', 'Form 1');
        expect(json).toHaveProperty('fields');
        expect(json.fields).toHaveLength(1);
        expect(json).toHaveProperty('areas');
        expect(json.areas).toHaveLength(1);
    });
});