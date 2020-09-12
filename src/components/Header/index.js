import React, { useEffect } from 'react';
import './index.css';
import Logo from '../../assets/react.png';

export const Header = (props) => {
    const { brandName } = props;

    useEffect(() => {
        let headerElement = document.getElementsByClassName("header");
        headerElement[0].style.setProperty('--fontSize', process.env.REACT_APP_BRAND_FONT_SIZE);
    }, [])


    let imgUrl = require(process.env.REACT_APP_LOGO);

    return (
        <div className={"header"}>
            <img src={imgUrl} alt={'company logo'} className={'header_logo'} />
            <span className={'header_name'}>{brandName}</span>
        </div>
    )
}
