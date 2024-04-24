// import React from 'react'
// // import { dataSkills } from '../data/skills.js'

// const dataSkills = [{
//     img: "../../src/assets/icons/js.svg",
//     name: "JavaScript"
// }]


// const IconSkills = () => {

//     return (
//         <div>
//             {dataSkills.map((data, key) => {
//                 <div key={key}>
//                     {/* <img src={require('../../src/assets/icons/js.svg')} alt="" /> */}
//                     <p className='bg-red-500'>{data.name}</p>
//                     <p>hi</p>
//                 </div>
//             })}

//         </div>
//     )
// }

// export default IconSkills

import React from 'react';
import { dataSkills } from '../data/skills';

const IconSkills = () => {
    return (
        <div className='flex gap-20'>
            {dataSkills.map((data, index) => (
                <div key={index}>
                    <img className='mb-2' src={data.img} />
                    <p className='text-center'>{data.name}</p>
                </div>
            ))}
        </div>
    );
};

export default IconSkills;


