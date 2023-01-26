import PWGenerator from '../assets/Images/PWGenerator.png'
import CodeQuiz from '../assets/Images/CodeQuiz.png'
import WeatherApp from '../assets/Images/WeatherApp.png'
import READMEGenerator from '../assets/Images/READMEGenerator.png'
import JATE from '../assets/Images/JATE.png'
import KMW from '../assets/Images/KMW.jpg'
import DEADCODER from '../assets/Images/deadcoder.png'

const projects = [
    {
        title: 'Deadcoder',
        info: 'Welcome to deadCoder [ ded - koh - der ]. deadCoder is an app that allows you to play Tetris, Lights Out, or TicTacToe. Player scores are tracked, and you, the player are able to like the games you enjoy the most. The project, built with a team of fellow developers, utilized a full MERN stack. I worked on the back end with Mongoose and GraphQL and contributed to game development, both in building their functionality and their communication with the server.',
        repo: 'https://github.com/tomasdiaz83/deadCoder',
        image: DEADCODER
    },
    {
        title: 'Text Editor',
        info: `Just Another Text Editor app is a simple text editor, utilizing a suite of WPA technologies. It keeps persistent data utilizing the Browser cache and allows for local installation`,
        repo: `https://github.com/tomasdiaz83/19-Text-Editor`,
        site: 'https://just-another-text-editor-ted83.herokuapp.com/',
        image: JATE,
    },
    {
        title: `Password Generator`,
        info: `The Password Generator will, through window prompts, obtain criteria (length, alphabetic cases, numerics, and special characters) from a user that will be employed in creating a randomized password.`,
        repo: `https://github.com/tomasdiaz83/Password-Generator`,
        site: 'https://tomasdiaz83.github.io/Password-Generator/',
        image: PWGenerator,
    },
    {
        title: 'Code Quiz',
        info: `The Code Quiz was my first from scratch Web Application, utilizing HTML, CSS, and Javascript. This involved not only the creation of functions manipulating variables, but developing javascript which dynamically updated and changed HTML and CSS while locally storing variables for use by the code at a later date.`,
        repo: `https://github.com/tomasdiaz83/CodeQuiz`,
        site: 'https://tomasdiaz83.github.io/CodeQuiz/',
        image: CodeQuiz,
    },
    {
        title: 'WeatherApp',
        info: `The weather app utilized data provided by the OpenWeather API (https://openweathermap.org/api) to depict weather information for a given city. A temporary search history is also built in.`,
        repo: `https://github.com/tomasdiaz83/WeatherApp`,
        site: 'https://tomasdiaz83.github.io/WeatherApp/',
        image: WeatherApp,
    },
    {
        title: 'README Generator',
        info: `The README generator allows the user to create a high-quality README through their terminal, utilizing nodeJS to initiate the application, and the inquirer NPM to receive data.`,
        repo: `https://github.com/tomasdiaz83/READMEGenerator`,
        site: '',
        image: READMEGenerator,
    },
    {
        title: 'Know Mow Worries',
        info: 'A forum built with MVC technology for freelance lawn workers to connect. This was a group project with a number of hands involved in the creation of the site.',
        repo: 'https://github.com/tomasdiaz83/KnowMowWorries',
        site: '',
        image: KMW
    }
]

export default projects