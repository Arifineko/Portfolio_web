import { Link } from "react-router-dom"
import Tooltip from '@mui/material/Tooltip';

const SocialMedia = (props) => {
    const { src, url, title } = props
    return (
        <Tooltip title={title}>
            <Link to={url} target="_blank">
                <img src={src} alt="" />
            </Link>
        </Tooltip>
    )
}

export default SocialMedia
