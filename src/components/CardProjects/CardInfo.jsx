import JavaScript from "../../assets/icons/js-icon.svg"
import Html from "../../assets/icons/html-icon.svg"
import Css from "../../assets/icons/css-icon.svg"
import Link1 from "../../assets/icons/link-icon.svg"
import Github from "../../assets/icons/github-icon.svg"
import Links from "./Links"



const LinksProject = (props) => {
    const { name, detail } = props;
    return (
        <div className='w-[500px] flex flex-col gap-6 p-10 justify-center'>
            <h1 className='font-bold text-xl'>{name}</h1>
            <p>{detail}</p>
            <div className="flex gap-3">
                <div className="flex flex-col items-center">
                    <img className="mb-3 w-[30px]" src={Html} alt="" />
                </div>
                <div className="flex flex-col items-center">
                    <img className="mb-3 w-[30px]" src={Css} alt="" />
                </div>
                <div className="flex flex-col items-center">
                    <img className="mb-3 w-[30px]" src={JavaScript} alt="" />
                </div>
            </div>
            <div className='flex gap-6'>
                <Links
                    url1="https://github.com/Arifineko/Bookshelf_Apps"
                    image1={Github}
                    url2="https://bookshelf-site.vercel.app/"
                    image2={Link1}
                />
            </div>
        </div>
    )
}

export default LinksProject
