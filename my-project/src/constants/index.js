import Alexa from '../assets/images/alexa.png';
import Cortana from '../assets/images/cortana.png';
import Siri from '../assets/images/siri.jpg';
import Koala from '../assets/images/koala.png'
import lion from '../assets/images/lion.png';
import fox from '../assets/images/fox.png';
import elephant from '../assets/images/elephant.png';
import dog from '../assets/images/dog.png'


const assistantCardData = [
    {
        imgURL: Alexa,
        title: 'ALexa',
        copyright: '@alexa99',
        description: "I'll help you but stuff off Amazon"
    },
    {
        imgURL: Cortana,
        title: 'Cortana',
        copyright: '@cortana12',
        description: "Personal Assistant by Microsoft"
    },
    {
        imgURL: Siri,
        title: 'Siri',
        copyright: '@siri44',
        description: "I don't get a lot of updates anymore"
    }
]

const animalsList = [
    Koala, 
    dog,
    lion,
    elephant,
    fox
]


export {assistantCardData, animalsList};