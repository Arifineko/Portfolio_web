import * as React from 'react';
import copy from "../../assets/icons/copy-icon.svg"
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Tooltip from '@mui/material/Tooltip';
import { useState } from 'react';

const ContactPeson = (props) => {

    const [title, setTitle] = useState("Copy to clipboard")

    const { image, contact } = props;
    return (
        <div className='flex gap-10 item-center'>
            <img src={image} alt="" />
            <p className='text-gray-900 text-[36px] font-semibold'>{contact}</p>

            <CopyToClipboard text={contact}>
                <Tooltip title={title}>
                    <button onClick={() => {
                        setTitle('Copied');

                        setTimeout(() => {
                            setTitle('Copy to clipboard')
                        }, 1000);
                    }}>
                        <img src={copy} alt="" />
                    </button>
                </Tooltip>
            </CopyToClipboard>
        </div>
    )
}

export default ContactPeson
