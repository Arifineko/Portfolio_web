

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


