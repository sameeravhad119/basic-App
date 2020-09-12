import React, { useEffect } from 'react';
import './index.css';

export const Footer = (props) => {

    useEffect(() => {
        let footerElement = document.getElementsByClassName("footer");
        footerElement[0].style.setProperty('--fontSize', process.env.REACT_APP_FOOTER_FONT_SIZE);
    }, [])

    return (
        <div className={'footer'}>
            {process.env.REACT_APP_FOOTER_CONTENT}
        </div>
    )
}
