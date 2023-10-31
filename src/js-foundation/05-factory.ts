interface BuildMakerPersonOptions {
    getUUID: () => string;
    getAge: (birthdate: string) => number;
}

export const buildMakePerson = ({
    getUUID,
    getAge,
}: BuildMakerPersonOptions) => {
    return ({ name, birthdate }: { name: string; birthdate: string }) => {
        return {
            id: getUUID(),
            name: name,
            birthdate: birthdate,
            age: getAge(birthdate),
        };
    };
};
