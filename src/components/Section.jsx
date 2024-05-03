import Button from '../../src/components/Button'

const Section = (props) => {

    const { name, detail, width } = props
    return (
        <div className='flex flex-col justify-center items-center gap-4'
            data-aos="fade-up"
            data-aos-duration="1000">
            <div>
                <Button
                    content={name}
                    bg="bg-gray-200"
                />
            </div>
            <p className={width}>{detail}</p>
        </div>
    )
}

export default Section
