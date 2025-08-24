import Links from "./Links"


const CardProject = ({ image, name, details, tech, linkGithub, linkDemo, reverse }) => {

    return (
        <div className={`flex shadow-sm ${reverse ? "flex-row-reverse" : "flex-row"}`}
            data-aos={reverse ? 'fade-left' : 'fade-right'}
            data-aos-offset="350"
            data-aos-easing="ease-in-sine">
            <div className='bg-gray-50 p-10 rounded-xl'>
                <img className='w-[480px] rounded-xl' src={image} alt="" />
            </div>
            <div className='w-[500px] flex flex-col gap-6 p-10 justify-center'>
                <h1 className='font-bold text-xl'>{name}</h1>
                <p>{details}</p>
                <div className="flex gap-3">
                    {tech.map((icon, index) => (
                        <div key={index} className="flex flex-col items-center justify-center">
                            <img className="mb-3 w-[30px]" src={icon} alt={`tech-${index}`} />
                        </div>
                    ))}
                </div>
                <div className='flex gap-6'>
                    <Links
                        linkGithub={linkGithub}
                        linkDemo={linkDemo}
                    />
                </div>
            </div>
        </div>
    )
}

export default CardProject
