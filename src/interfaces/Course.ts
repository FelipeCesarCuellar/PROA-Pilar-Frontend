export default interface Course {
    name: string;
    teachers: string[];
    students: string[]; // Terá que ser um array de objetos quando conectar ao backend.
    region: string;
    id: string;
    startDate: string;
    endDate: string;
    createdAt: string;
    updatedAt: string;
}
