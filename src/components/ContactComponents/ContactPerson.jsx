import * as React from 'react';
import copyIcon from "../../assets/icons/copy-icon.svg"
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Tooltip from '@mui/material/Tooltip';
import { useState } from 'react';

const ContactPerson = (props) => {
    const [tooltipTitle, setTooltipTitle] = useState("Copy to clipboard");

    const { image, contact } = props;

    return (
        <div className='flex gap-10 item-center'>
            <img src={image} alt="" />
            <p className='text-gray-900 text-[36px] font-semibold'>{contact}</p>

            <CopyToClipboard text={contact}>
                <button onClick={() => {
                    setTooltipTitle('Copied');

                    setTimeout(() => {
                        setTooltipTitle('Copy to clipboard');
                    }, 1000);

                }}>
                    <Tooltip title={tooltipTitle}>
                        <img src={copyIcon} alt="Copy" />
                    </Tooltip>
                </button>
            </CopyToClipboard>
        </div>
    );
}

export default ContactPerson;
