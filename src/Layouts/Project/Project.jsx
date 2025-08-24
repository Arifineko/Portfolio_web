import CardProject from '../../components/CardProjects/CardProject'
import Section from '../../components/Section'
import { projects } from '../../data/project'

const Project = () => {

    return (
        <div className='flex flex-col justify-center text-gray-600 gap-[48px] items-center py-[96px] px-20 bg-gray-50' id='Project'>
            <Section
                name="Projects"
                detail="Some projects that I have built:"
            />
            {
                projects.map((project) => {
                    return (
                        <CardProject
                            key={project.id}
                            image={project.image}
                            name={project.name}
                            details={project.details}
                            tech={project.tech}
                            linkGithub={project.linkGithub}
                            linkDemo={project.linkDemo}
                            reverse={project.reverse}
                        />
                    )
                })
            }
        </div>
    )
}

export default Project
