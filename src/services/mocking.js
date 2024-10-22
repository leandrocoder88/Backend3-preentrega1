import { faker } from "@faker-js/faker";
import { createHash } from "../utils/index.js";

class MockingService {
    static async generateMockingUsers(num) {
        const users = [];

        for (let i = 0; i < num; i++) {
            users.push({
                first_name: faker.person.firstName(),
                last_name: faker.person.lastName(),
                email: faker.internet.email(),
                password: await createHash("coder123"),
                role: faker.helpers.arrayElement(["user", "admin"]),
                pets: []
            })
        }
        return users;
    }

    static async generateMockingPets(num) {
        const pets = [];
        const species = ['chimango', 'avestruz', 'aguila', 'casuario'];

        for (let i = 0; i < num; i++) {
            pets.push({
                name: faker.animal.dog(),
                specie: faker.helpers.arrayElement(species),
                adopted: false,
                birthDate: faker.date.past(),
                image: "../public/img/casuarioporcurioso.jpg"
            })
        }
        return pets;
    }
}

export default MockingService; 