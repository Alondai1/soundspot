import React from 'react';

import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default function Footer() {
    return (
        <div className="flex footer-container">
            <div className="flex main-container footer-subcontainer">
                <div className="flex align-center credit-container">
                    <span className="footer-title">Alon Dai©</span>
                </div>
                <div className="flex align-center social-icons-container">
                    <div className="flex social-icon-container">
                        <a href='https://www.facebook.com/alon.dai' target='blank'>
                            <FacebookIcon className="social-icon" />
                        </a>
                    </div>
                    <div className="flex social-icon-container">
                        <a href='https://github.com/Alondai1' target='blank'>
                            <GitHubIcon className="github-icon" />
                        </a>
                    </div>
                    <div className="flex social-icon-container">
                        <a href='https://www.linkedin.com/in/alon-dai-7b4b3418b/' target='blank'>
                            <LinkedInIcon className="social-icon" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}