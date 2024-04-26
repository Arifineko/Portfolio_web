import IconSkills from '../../components/IconSkills'
import Section from '../../components/Section'

const Skills = () => {
    return (
        <div className='flex flex-col justify-center text-gray-600 gap-[48px] items-center py-[96px] px-20'>
            <Section
                name='Skills'
                detail="The skills, tools and technologies I am really good at:"
            />
            <IconSkills />
        </div>
    )
}

export default Skills
