import Link from '../../components/Link'
// import logo from '../../assets/icons/logo.svg'

const Navbar = () => {

    return (
        <nav className='fixed z-20 py-4 text-gray-500 left-0 top-0 right-0'
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="400"
            data-aos-offset="0"
        >
            <div className='flex gap-5 items-center justify-center'>
                <Link />
            </div>
        </nav>
    )
}

export default Navbar
