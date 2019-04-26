import React from 'react';
// import PropTypes from 'prop-types';

import Login from '../login/Login';

const blocStyle = {
    width: '35vh',
    height: '28vh',
    margin: '32.9vh',
    padding: '2vh',
    backgroundColor: '#0b1d2d',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
};

function Home() {
    return (
        <div style={blocStyle}>
            <Login/>
        </div>
    );
}

// JoinRoom.Proptype = {
//     onClick: PropTypes.func.isRequired,
// };

export default Home;