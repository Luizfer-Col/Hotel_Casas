import luxury from '../../assets/img/Rooms/img/luxury.png'
import single from '../../assets/img/Rooms/img/single.png'
import suite from '../../assets/img/Rooms/img/suite.png'
import twin from '../../assets/img/Rooms/img/twin.png'

export const ReserveInfo = [
    {
        id: 1,
        name: 'Habitación Suite con cama king',
        description: 'Laboris esse laboris eu proident laborum nisi Lorem amet Lorem officia duis aliqua. Do voluptate laborum mollit amet adipisicing excepteur aliqua reprehenderit in sunt quis dolor irure velit.',
        features: [
            '1 habitación',
            '2 personas',
            '1 cama King',
            '1 baño',
            '1 smart tv',
            'wifi',
            'aire acondicionado',
            'balcon'
        ],
        total: '$300.000',
        precioPorNoche: '$150.000',
        noches: '2',
        personas: '2',
        images: suite

    },
    {
        id: 2,
        name: 'Habitación Twin con dos camas individuales',
        description: 'Laboris esse laboris eu proident laborum nisi Lorem amet Lorem officia duis aliqua. Do voluptate laborum mollit amet adipisicing excepteur aliqua reprehenderit in sunt quis dolor irure velit.',
        features: [
            '1 habitación',
            '2 personas',
            '2 camas',
            '1 baño',
            '1 smart tv',
            'wifi',
            'aire acondicionado',
        ],
        total: '$250.000',
        precioPorNoche: '$125.000',
        noches: '2',
        personas: '2',
        images: twin

    },
    {
        id: 3,
        name: ' 2 Habitaciones Single con cama individual',
        description: 'Laboris esse laboris eu proident laborum nisi Lorem amet Lorem officia duis aliqua. Do voluptate laborum mollit amet adipisicing excepteur aliqua reprehenderit in sunt quis dolor irure velit.',
        features: [
            '2 habitaciones',
            '2 personas',
            '2 camas',
            '2 baños',
            '2 smart tv',
            'wifi',
        ],
        total: '$310.000',
        precioPorNoche: '$160.000',
        noches: '2',
        personas: '2',
        images: single

    },

]