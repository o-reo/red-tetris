import React from 'react';
import WebFont from 'webfontloader';

import logo from '../assets/Le-101.png';

WebFont.load({
    google: {
        families: ['Permanent Marker']
    }
});

const footerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: '0',
    width: '100%',
    height: '14.24vh',
    color: '#61dafb',
    backgroundImage: 'linear-gradient(rgba(53, 58, 73, 0.7), rgba(11, 29, 45, 1))',
};

const fontStyle = {
    fontFamily: 'Permanent Marker',
    fontSize: '3vh',
    fontWeight: '300',
    color: '#61dafb',
    marginRight: '2vh'
};

const imageStyle = {
    height: '10vh',
    marginLeft: '2vh'
};

function Footer() {
    return (
        <div style={footerStyle}>
            <p style={fontStyle}>befuhro & gmadec</p>
            <img src={logo} style={imageStyle} alt='le-101-logo'/>
        </div>
    );
}

export default Footer;