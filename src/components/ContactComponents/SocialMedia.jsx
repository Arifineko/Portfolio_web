import { Link } from "react-router-dom"
const SocialMedia = (props) => {
    return (
        <Link>
            <img src={props.url} alt="" />
        </Link>
    )
}

export default SocialMedia
