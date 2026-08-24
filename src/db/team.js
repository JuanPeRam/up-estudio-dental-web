const images_path = 'img/Team'

const team = [
    {
        id: 'cristina',
        name: 'Dra. Cristina Umérez García',
        roles: ['Odontología general', 'Odontopediatría', 'Ortodoncia'],
        description: 'La Dra. Cristina Umérez García es una profesional de referencia en odontología, odontopediatría y ortodoncia, con más de 25 años de experiencia. Su trato cercano con los más pequeños y su dedicación a cada caso la han convertido en una de las especialistas de mayor confianza de la clínica.',
        picture: `${images_path}/cristina.webp`
    },
    {
        id: 'rafael',
        name: 'Dr. Rafael Darío Sosa Sánchez',
        roles: ['Cirujano bucal', 'Implantólogo'],
        description: 'El Dr. Rafael Darío Sosa Sánchez es cirujano bucal e implantólogo, con más de 30 años de experiencia en el sector. Su trayectoria y rigor técnico lo sitúan como uno de los principales especialistas en cirugía bucal e implantología de la clínica.',
        picture: `${images_path}/rafael-dario.webp`
    },
    {
        id: 'isabel',
        name: 'Dra. Isabel Cristina Sosa Umérez',
        roles: ['Odontología general'],
        description: 'La Dra. Isabel Cristina Sosa Umérez es licenciada en Odontología por la Universidad Europea de Madrid. Desde entonces, ha seguido formándose para ofrecer a cada paciente tratamientos actualizados y una atención cercana y meticulosa.',
        picture: `${images_path}/isabel.webp`
    },
    {
        id: 'nilyam',
        name: 'Dra. Nilyam Iturniza',
        roles: ['Periodoncista'],
        description: 'La Dra. Nilyam Iturriza está especializada en periodoncia, el cuidado de las encías y los tejidos que sostienen los dientes. Combina un alto nivel técnico con un ambiente relajado, para que cada paciente se sienta cómodo durante su tratamiento.',
        picture: `${images_path}/nilyam.webp`
    },
    {
        id: 'juan',
        name: 'Juan Carlos Pereira Fernández',
        roles: ['CEO'],
        description: 'Juan Carlos Pereira Fernández es el CEO de Up Estudio Dental y Estética. Con una visión clara y un compromiso firme con la excelencia, lidera al equipo hacia los más altos estándares de calidad en odontología y estética en Móstoles, Madrid, con un enfoque siempre centrado en el paciente.',
        picture: `${images_path}/juan-carlos.webp`
    },
    {
        id: 'claudia',
        name: 'Claudia García',
        roles: ['Higienista Dental'],
        description: 'Claudia García es higienista dental y se dedica a ofrecer el más alto nivel de cuidado oral personalizado, especializándose en la prevención y el mantenimiento de una salud bucal óptima para todos los pacientes de la clínica.',
        picture: `${images_path}/claudia.webp`
    }
]

const getMemberByName = (id)=>{
    return team.find(member => member.id === id);
}

export {team, getMemberByName};
