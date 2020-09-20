import React from 'react';

import headerLogo from '../assets/img/small-logo-black.png';

export default function Header() {
    return (
        <div className="flex header-container">
            <div className="heartbeat header-logo-container">
                <img src={headerLogo} alt="" />
            </div>
            <div className="flex center align-center app-title-container">
                <div className="uppercase">sound<span className="focus-in-contract">spot</span></div>
            </div>
        </div>
    )
}