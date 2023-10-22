export default interface Student {
    name: string;
    email: string;
    phone: string;
    courses: string; // Terá que ser um array de objetos quando conectar ao backend.
    state: string;
    situation: string;
    id: string;
}
