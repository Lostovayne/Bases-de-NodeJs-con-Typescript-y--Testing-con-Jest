import { characters } from './../../src/js-foundation/02-destructuring';

describe('Probando Destructuring', () => {
    test('characters should contain Flash, Superman', () => {
        const [flash, superman] = characters;
        expect(flash).toBe('Flash');
        expect(superman).toBe('Superman');
    });

    test("First character should be 'Flash , and second character should be 'Superman '", () => {
        expect(characters[0]).toBe('Flash');
        expect(characters[1]).toBe('Superman');
    });
});
