import { getAge } from "./../../src/plugins/get-age.plugin";

describe("Test in the getAge plugin", () => {
  test("getAge() should return the age of a person", () => {
    const birthdate = "1985-10-21";
    const age = getAge(birthdate);
    expect(typeof age).toBe("number");
  });

  test("getAge should return current age", () => {
    const birthdate = "1985-10-21";
    const age = getAge(birthdate);
    const calculateAge = new Date().getFullYear() - new Date(birthdate).getFullYear();
    expect(age).toBe(calculateAge);
  });
});
