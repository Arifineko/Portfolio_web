import Section from '../../components/Section'
import SocialMedia from '../../components/ContactComponents/SocialMedia'
import github from '../../assets/icons/github-icon.svg'
import figma from '../../assets/icons/figma-icon.svg'
import mail from "../../assets/icons/mail-icon.svg"
import phone from "../../assets/icons/phone-icon.svg"
import ContactPeson from '../../components/ContactComponents/ContactPeson'

const Contact = () => {
    return (
        <div className='py-[96px] px-20 flex flex-col gap-[48px] justify-center items-center'>
            <Section
                name="Get in touch"
                detail="What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect."
                width="w-[576px] text-center"
            />
            <div className='flex flex-col items-center gap-2'>
                <ContactPeson
                    image={mail}
                    contact="Arifineko@gmail.com"
                    link="tes"
                />
                <ContactPeson
                    image={phone}
                    contact="+62 8980500565"
                    link="tes"
                />

            </div>
            <div className='flex flex-col gap-2 items-center'>
                <p>You may also find me on these platforms!</p>
                <div className='flex gap-1'>
                    <SocialMedia url={github} />
                    <SocialMedia url={figma} />
                </div>
            </div>
        </div>
    )
}

export default Contact
