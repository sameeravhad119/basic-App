import React, { useEffect } from 'react';
import './index.css';

export const Body = (props) => {

    useEffect(() => {
        let bodyElement = document.getElementsByClassName("body");
        bodyElement[0].style.setProperty('--fontSize', process.env.REACT_APP_BODY_FONT_SIZE);
    }, [])

    return (
        <div className={'body'}>
            {process.env.REACT_APP_BODY_CONTENT}
        </div>
    )
}
