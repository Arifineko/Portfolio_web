import CardInfo from '../CardProjects/CardInfo'


const CardProject = (props) => {

    const { image, name, detail, reverse } = props;
    return (
        <div className={`flex shadow-sm ${reverse}`}>
            <div className='bg-gray-50 p-10 rounded-xl'>
                <img className='w-[480px] rounded-xl' src={image} alt="" />
            </div>
            <CardInfo
                name={name}
                detail={detail}
            />
        </div>
    )
}

export default CardProject
