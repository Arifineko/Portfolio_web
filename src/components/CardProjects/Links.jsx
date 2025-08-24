import githubIcon from '../../assets/icons/github-icon.svg'
import demoIcon from '../../assets/icons/link-icon.svg'

const Links = ({ linkDemo, linkGithub }) => {
    return (
        <>
            <a
                href={linkGithub}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 justify-center items-center"
            >
                <p>Code</p>
                <img src={githubIcon} alt="GitHub" />
            </a>

            <a
                href={linkDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 justify-center items-center"
            >
                <p>Live Demo</p>
                <img src={demoIcon} alt="Demo" />
            </a>
        </>
    )
}

export default Links
