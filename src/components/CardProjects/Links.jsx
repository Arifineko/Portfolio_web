import { Link } from "react-router-dom"

const Links = (props) => {
    const { url1, url2, image1, image2 } = props;
    return (
        <>
            <Link to={url1}>
                <div className="flex gap-2 justify-center items-center">
                    <p>Code</p>
                    <img src={image1} alt="" />
                </div>
            </Link>
            <Link to={url2}>
                <div className="flex gap-2 justify-center items-center">
                    <p>Live Demo</p>
                    <img src={image2} alt="" />
                </div>
            </Link>
        </>
    )
}

export default Links
