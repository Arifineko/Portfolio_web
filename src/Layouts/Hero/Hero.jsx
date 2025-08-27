import location_icon from "../../assets/icons/location-icon.svg"



const Hero = () => {
    return (
        <>
            <div className='py-[96px] bg-gray-50 mt-10'>
                <div className='flex gap-[48px] items-center justify-center mb-20'
                    data-aos="fade-right" data-aos-duration="2000"
                >
                    <div>
                        <h1 className='font-bold text-[40px]'>Frontend Developer</h1>
                        <h1 className='text-[30px] font-extralight'>- Crafting since 2021</h1>
                        <div className='flex gap-2 mt-4'>
                            <img src={location_icon} alt="" />
                            <p>Currently based in Purwokerto, Indonesia</p>
                        </div>
                    </div>
                    <div>
                        <p className='max-w-[400px] mb-4'>With a solid foundation in HTML, CSS, and JavaScript, I’ve expanded my skills to building responsive and modern interfaces using React JS and Tailwind CSS.</p>
                        <button className='py-3 px-5 bg-gray-800 rounded-3xl text-white'>Hire me</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
