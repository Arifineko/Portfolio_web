import React from 'react'
import IconSkills from '../../components/IconSkills'
import Button from '../../components/Button'

const Skills = () => {
    return (
        <div className='flex flex-col justify-center text-gray-600 gap-[48px] items-center py-[96px] px-20'>
            <div className='flex flex-col justify-center items-center gap-4'>
                <div>
                    <Button
                        content="Skills"
                        bg="gray-200"
                    />
                </div>
                <p>The skills, tools and technologies I am really good at:</p>
            </div>
            <IconSkills />
        </div>
    )
}

export default Skills
