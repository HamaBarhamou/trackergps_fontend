import React from 'react';
import Head from '../components/Head';
import Onglet from '../components/Onglet';

const styleGlobale={
    margin: '10px',
    paddingTop: 5,
    //background:'#C0C0C0',
    background:'#f8f9fd',
    margin: '1%',
    left: '1%',
    width: '98%',
}

const Rapports = () => {
    return (
        <div style={styleGlobale}>
            <Head/>
            <Onglet/>
            <h1>Rapports</h1>
        </div>
    );
};

export default Rapports;