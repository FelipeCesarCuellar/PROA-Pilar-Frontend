import Student from 'interfaces/student';

function createData(
    name: string,
    email: string,
    phone: string,
    courses: string,
    situation: string,
    state: string,
    id: string
) {
    return { name, email, phone, courses, state, situation, id } as Student;
}

const sampleStudents = [
    createData(
        'Gustavo Zamboni do Carmo',
        'g.zamboni@gmail.com',
        '(11) 98765-4321',
        'Programação, ADM',
        'Normal',
        'SP',
        'ALU001'
    ),
    createData(
        'Fernando Qiao Jie Tan',
        'fernandoqiao@gmail.com',
        '(11) 98765-4321',
        'Programação, ADM',
        'Desistente',
        'SP',
        'ALU002'
    ),
    createData(
        'Felipe Bergamini de Souza',
        'fefe@gmail.com',
        '(11) 98765-4321',
        'Programação, ADM',
        'Normal',
        'SP',
        'ALU003'
    ),
    createData(
        'Bruno Jovenasso',
        'bjovenasso2001@gmail.com',
        '(11) 98765-4321',
        'Programação, ADM',
        'Atenção',
        'RJ',
        'ALU004'
    ),
    createData(
        'Caíque Yago de Paula Vargas Nascimento',
        'caiqueypvn@gmail.com',
        '(11) 98765-4321',
        'Programação, ADM',
        'Atenção',
        'MG',
        'ALU005'
    ),
    createData(
        'Gustavo Zamboni do Carmo',
        'g.zamboni@gmail.com',
        '(11) 98765-4321',
        'Programação, ADM',
        'Normal',
        'SP',
        'ALU006'
    ),
    createData(
        'Fernando Qiao Jie Tan',
        'fernandoqiao@gmail.com',
        '(11) 98765-4321',
        'Programação, ADM',
        'Desistente',
        'SP',
        'ALU007'
    ),
    createData(
        'Felipe Bergamini de Souza',
        'fefe@gmail.com',
        '(11) 98765-4321',
        'Programação, ADM',
        'Normal',
        'SP',
        'ALU008'
    ),
    createData(
        'Bruno Jovenasso',
        'bjovenasso2001@gmail.com',
        '(11) 98765-4321',
        'Programação, ADM',
        'Atenção',
        'RJ',
        'ALU009'
    ),
    createData(
        'Caíque Yago de Paula Vargas Nascimento',
        'caiqueypvn@gmail.com',
        '(11) 98765-4321',
        'Programação, ADM',
        'Atenção',
        'MG',
        'ALU010'
    )
];

export default sampleStudents;
