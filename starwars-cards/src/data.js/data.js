import leya from '../components/img/leya.png';
import luk from '../components/img/luk.png';
import darth from '../components/img/dart.png';
import obi from '../components/img/obi.png';
import r2 from '../components/img/r2.png';
import beru from '../components/img/beru.png';
import owen from '../components/img/owen.png';
import po from '../components/img/c-3po.png'
import r4 from '../components/img/r5-d4.png';
import bigs from '../components/img/bigs dark.png';


export const list = [
    {
        "name": "Luke Skywalker", 
        "height": "172", 
        "mass": "77", 
        "hair_color": "blond", 
        "skin_color": "fair", 
        "eye_color": "blue", 
        "birth_year": "19BBY", 
        "gender": "male",
        "img": luk,
        "url": "https://swapi.dev/api/people/1/",
    },
    {
        "name": "C-3PO", 
        "height": "167", 
        "mass": "75", 
        "hair_color": "n/a", 
        "skin_color": "gold", 
        "eye_color": "yellow", 
        "birth_year": "112BBY", 
        "gender": "n/a", 
        "img": po,
        "url": "https://swapi.dev/api/people/2/",

    },
    {
        "name": "R2-D2", 
        "height": "96", 
        "mass": "32", 
        "hair_color": "n/a", 
        "skin_color": "white, blue", 
        "eye_color": "red", 
        "birth_year": "33BBY", 
        "gender": "n/a", 
        "img": r2,
        "url": "https://swapi.dev/api/people/3/",
    },
    {
        "name": "Darth Vader", 
        "height": "202", 
        "mass": "136", 
        "hair_color": "none", 
        "skin_color": "white", 
        "eye_color": "yellow", 
        "birth_year": "41.9BBY", 
        "gender": "male", 
        "img": darth,
        "url": "https://swapi.dev/api/people/4/",
    },
    {
        "name": "Leia Organa", 
        "height": "150", 
        "mass": "49", 
        "hair_color": "brown", 
        "skin_color": "light", 
        "eye_color": "brown", 
        "birth_year": "19BBY", 
        "gender": "female",
        "img": leya, 
        "url": "https://swapi.dev/api/people/5/",
    },
    {
        "name": "Owen Lars", 
        "height": "178", 
        "mass": "120", 
        "hair_color": "brown, grey", 
        "skin_color": "light", 
        "eye_color": "blue", 
        "birth_year": "52BBY", 
        "gender": "male", 
        "img": owen,
        "url": "https://swapi.dev/api/people/6/",
    },
    {
        "name": "Beru Whitesun lars", 
        "height": "165", 
        "mass": "75", 
        "hair_color": "brown", 
        "skin_color": "light", 
        "eye_color": "blue", 
        "birth_year": "47BBY", 
        "gender": "female",
        "img": beru, 
        "url": "https://swapi.dev/api/people/7/",
    },
    {
        "name": "R5-D4", 
        "height": "97", 
        "mass": "32", 
        "hair_color": "n/a", 
        "skin_color": "white, red", 
        "eye_color": "red", 
        "birth_year": "unknown", 
        "gender": "n/a", 
        "img": r4,
        "url": "https://swapi.dev/api/people/8/",

    },
    {
        "name": "Biggs Darklighter", 
        "height": "183", 
        "mass": "84", 
        "hair_color": "black", 
        "skin_color": "light", 
        "eye_color": "brown", 
        "birth_year": "24BBY", 
        "gender": "male",
        "img": bigs, 
        "url": "https://swapi.dev/api/people/9/",
    },
    {
        "name": "Obi-Wan Kenobi", 
        "height": "182", 
        "mass": "77", 
        "hair_color": "auburn, white", 
        "skin_color": "fair", 
        "eye_color": "blue-gray", 
        "birth_year": "57BBY", 
        "gender": "male", 
        "img": obi ,
        "url": "https://swapi.dev/api/people/10/",
    },
];

console.log(...list);