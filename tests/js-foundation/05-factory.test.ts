import { buildMakePerson } from "../../src/js-foundation/05-factory";

describe("05-factory", () => {
    const getUUID = () => {
        return "123";
    };

    const getAge = (birthdate: string) => {
        return 35;
    };

    test("buildMakePerson should return a function", () => {
        const makePerson = buildMakePerson({ getUUID, getAge });

        expect(typeof makePerson).toBe("function");
    });

    test("makePerson should return an person", () => {
        const makePerson = buildMakePerson({ getUUID, getAge });
        const johnDoe = makePerson({ name: "John", birthdate: "1985-10-21" });

        expect(johnDoe).toEqual({
            id: "123",
            name: "John",
            birthdate: "1985-10-21",
            age: 35,
        });
    });
});
