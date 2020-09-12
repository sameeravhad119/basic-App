import React from 'react';
import './index.css';
import Logo from "../../assets/react.png";

export const Header = (props) => {
    const { brandName, logo } = props;
    return (
        <div className={"header"}>
            <img src={Logo} alt={'company logo'} className={'header_logo'} />
            <span className={'header_name'}>{brandName}</span>
        </div>
    )
}
