import uuid from 'uuid'


const locations = [
    {
        id: uuid.v4(),
        title: 'Kurger Bing',
        address: 'Park of Royals 23',
        description: 'A wonderfull burger feast where you will be served as a Royalty',
        favorite: false,
        stars: 3
    },
    {
        id: uuid.v4(),
        title: 'Street Burgers',
        address: 'Park of Royals 23',
        description: 'A wonderfull burger feast where you will be served as a Royalty',
        favorite: true,
        stars: 3
    },
    {
        id: uuid.v4(),
        title: 'Holy burgers',
        address: 'Park of Royals 23',
        description: 'A wonderfull burger feast where you will be served as a Royalty',
        favorite: true,
        stars: 3
    },
    {
        id: uuid.v4(),
        title: 'Burgers of Nature',
        address: 'Park of Royals 23',
        description: 'A wonderfull burger feast where you will be served as a Royalty',
        favorite: false,
        stars: 3
    },
    {
        id: uuid.v4(),
        title: 'Chungers',
        address: 'Park of Royals 23',
        description: 'A wonderfull burger feast where you will be served as a Royalty',
        favorite: false,
        stars: 3
    },
    {
        id: uuid.v4(),
        title: 'Channol Bing',
        address: 'Park of Royals 23',
        description: 'A wonderfull burger feast where you will be served as a Royalty',
        favorite: false,
        stars: 3
    },{
        id: uuid.v4(),
        title: 'KFC Burgers',
        address: 'Park of Royals 23',
        description: 'A wonderfull burger feast where you will be served as a Royalty',
        favorite: true,
        stars: 3
    },
] 

export default locations

const template = {
    id: uuid.v4(),
    title: '',
    address: '',
    description: '',
    favorite: true,
    stars: 3
}