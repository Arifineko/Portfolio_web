import project1Image from '../assets/images/project1.png'
import project2Image from '../assets/images/project2.png'
import project3Image from '../assets/images/project3.png'
import htmlIcon from '../assets/icons/html-icon.svg'
import cssIcon from '../assets/icons/css-icon.svg'
import jsIcon from '../assets/icons/js-icon.svg'
import reactIcon from '../assets/icons/react-icon.svg'
import tailwindIcon from '../assets/icons/tailwind-icon.svg'


export const projects = [
    {
        id: 1,
        image: project1Image,
        name: "Youtube Clone",
        details: "A responsive YouTube clone that replicates the core UI and layout of the platform. Featuring real-time YouTube API data for videos.",
        tech: [reactIcon, tailwindIcon],
        linkGithub: "https://github.com/Arifineko/Youtube-Clone",
        linkDemo: "https://youtube-clone-apps-flame.vercel.app",
        reverse: false
    },
    {
        id: 2,
        image: project2Image,
        name: "Elecar",
        details: "Elecar is a website dedicated to providing information and resources about electric cars. The site provides an explanation of the different makes and models of electric cars.",
        tech: [htmlIcon, cssIcon, jsIcon],
        linkGithub: "https://github.com/Arifineko/Elecar",
        linkDemo: "https://elecar-sites.netlify.app",
        reverse: true
    },
    {
        id: 3,
        image: project3Image,
        name: "Bookshelf",
        details: "Bookshelf created as part of a submission for dicoding, Bookshelf allows users to add, edit, and delete books in their personal collection.",
        tech: [htmlIcon, cssIcon, jsIcon],
        linkGithub: "https://github.com/Arifineko/Bookshelf_Apps",
        linkDemo: "https://bookshelf-site.vercel.app",
        reverse: false
    },
]