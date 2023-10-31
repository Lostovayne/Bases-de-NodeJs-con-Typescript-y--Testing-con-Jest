import { emailTemplate } from './../../src/js-foundation/01-template';

describe('Pruebas en Template', () => {
    test('emailTemplate should contain a greeting', () => {
        const template = emailTemplate;
        expect(template).toContain('Hi,');
        expect(template).toContain('Thank you for your order.');
        expect(template).toContain('Order ID: ');
    });

    test('emailTemplate should contain {{name}} and {{orderId}}', () => {
        expect(emailTemplate).toMatch(/{{name}}/);
        expect(emailTemplate).toMatch(/{{orderId}}/);
    });
});
