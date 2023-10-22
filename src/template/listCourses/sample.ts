import Course from 'interfaces/Course';

function createData(
    name: string,
    teachers: string[],
    students: string[], // Terá que ser um array de objetos quando conectar ao backend.
    region: string,
    id: string,
    startDate: string,
    endDate: string,
    createdAt: string,
    updatedAt: string
) {
    return {
        name,
        teachers,
        students,
        region,
        id,
        startDate,
        endDate,
        createdAt,
        updatedAt
    } as Course;
}

const sampleCourses = [
    createData(
        'Websites com HTML, CSS e JS do início',
        ['Bruno Jovenasso', 'Thiago Maia', 'Felipe Bergamini'],
        ['Fernando Qiao', 'Gustavo Zamboni', 'Victor Eduardo Gomes'],
        'SP',
        'PSI3472',
        '01/09/2023',
        '01/01/2024',
        '30/08/2023',
        '01/09/2023'
    ),
    createData(
        'Introdução à programação de computadores em Pyhton',
        ['Bruno Jovenasso', 'Thiago Maia', 'Felipe Bergamini'],
        ['Fernando Qiao', 'Gustavo Zamboni', 'Victor Eduardo Gomes'],
        'SP',
        'PSI3462',
        '01/09/2023',
        '01/01/2024',
        '30/08/2023',
        '01/09/2023'
    ),
    createData(
        'Administração de empresas',
        ['Bruno Jovenasso', 'Thiago Maia', 'Felipe Bergamini'],
        ['Fernando Qiao', 'Gustavo Zamboni', 'Victor Eduardo Gomes'],
        'SP',
        'PSI3452',
        '01/09/2023',
        '01/01/2024',
        '30/08/2023',
        '01/09/2023'
    ),
    createData(
        'Sistemas embarcados com Arduino e C++',
        ['Bruno Jovenasso', 'Thiago Maia', 'Felipe Bergamini'],
        ['Fernando Qiao', 'Gustavo Zamboni', 'Victor Eduardo Gomes'],
        'SP',
        'PSI3442',
        '01/09/2023',
        '01/01/2024',
        '30/08/2023',
        '01/09/2023'
    )
];

export default sampleCourses;
