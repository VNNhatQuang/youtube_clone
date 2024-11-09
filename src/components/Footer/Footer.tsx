import React from 'react';
import "./Footer.css";
import footerData from "../../scripts/footer.json";



const Footer: React.FC = () => {
    return (
        <footer id="footer" className='my-3'>
            <div className="guide-primary mb-2">
                {footerData.guidePrimary.map((gPri, index) => (
                    <a className='text-aaa me-2' href={gPri.href} key={index}>{gPri.name}</a>
                ))}
            </div>
            <div className="guide-secondary mb-2">
                {footerData.guideSecondary.map((gSec, index) => (
                    <a className='text-aaa me-2' href={gSec.href} key={index}>{gSec.name}</a>
                ))}
            </div>
            <p className='text-secondary'>{footerData.copyright}</p>
        </footer>
    );
};

export default Footer;
