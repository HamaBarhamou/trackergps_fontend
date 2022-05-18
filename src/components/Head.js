import React from 'react';
import logo from '../images/logo.png';
import email from '../images/email.png';
import etoile from '../images/etoile.jpeg';
import message from '../images/message.png';
import pays from '../images/pays.jpeg';
import profile from '../images/profile.png';
import recherche from '../images/recherche.jpeg';
import valider from '../images/valider.png';

const HeadStyle={
    height: '60px',
    display: 'flex',
    /*background: 'green',*/
    marginLeft: '40%', 
}

const styleT={
    height: '25px',
}

const Head = () => {
    return (
        <div style={HeadStyle}>
            <img src={valider} style={styleT}/>
            <img src={message} style={styleT}/>
            <img src={email} style={styleT}/>
            <img src={etoile} style={styleT}/>
            <img src={logo} /> 
            <img src={pays} style={styleT}/>
            <img src={recherche} style={styleT}/>
            <img src={profile} style={styleT}/>
        </div>
    );
};

export default Head;