import { getUserById } from './../../src/js-foundation/04-arrow';

describe('03-callbacks', () => {
    test('getUserById  should return an error if user does not exist', (done) => {
        const id = 10;
        getUserById(id, (err, user) => {
            expect(err).toEqual(`User not found with id ${id}`);
            expect(user).toBeUndefined();
            done(); // se usa como un await para indicar que espere que acabe de responder para acabar la prueba
        });
    });

    test('getUserById should return user ', (done) => {
        const id = 1;
        getUserById(id, (err, user) => {
            expect(err).toBeUndefined();
            expect(user).toEqual({ id: 1, name: 'John Doe' });
            done();
        });
    });
});
