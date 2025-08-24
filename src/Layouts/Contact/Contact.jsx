import Section from '../../components/Section'
import SocialMedia from '../../components/ContactComponents/SocialMedia'
import github from '../../assets/icons/github-icon.svg'
import linkedin from "../../assets/icons/linkedin-icon.svg"
import instagram from "../../assets/icons/ig-icon.svg"
import mail from "../../assets/icons/mail-icon.svg"
import ContactPerson from '../../components/ContactComponents/ContactPerson'

const Contact = () => {
    return (
        <footer className='py-[96px] px-20 flex flex-col gap-[48px] justify-center items-center' id='Contact'>
            <Section
                name="Get in touch"
                detail="What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect."
                width="w-[576px] text-center"
            />
            <div className='flex flex-col items-center gap-2'>
                <ContactPerson
                    image={mail}
                    contact="Arifineko886@gmail.com"
                    link="tes"
                />
            </div>
            <div className='flex flex-col gap-4 items-center'>
                <p>You may also find me on these platforms!</p>
                <div className='flex gap-3'>
                    <SocialMedia title="Github" src={github} url="https://www.github.com/Arifineko" />
                    <SocialMedia title="Instagram" src={instagram} url='https://www.instagram.com/arifin_e/' />
                    <SocialMedia title="Linkedin" src={linkedin} url='https://www.linkedin.com/in/arifineko/' />
                </div>
            </div>
        </footer>
    )
}

export default Contact
