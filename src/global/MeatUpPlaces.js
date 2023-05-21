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

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCfBBJvz69p8d_J9yDIuIcTkEdl2mEA20Y",
//   authDomain: "mobile-meat-and-eat.firebaseapp.com",
//   projectId: "mobile-meat-and-eat",
//   storageBucket: "mobile-meat-and-eat.appspot.com",
//   messagingSenderId: "284379235365",
//   appId: "1:284379235365:web:8c6eb4666085ee219e2bcc"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);