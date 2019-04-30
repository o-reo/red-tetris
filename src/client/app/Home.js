import React from 'react';
// import PropTypes from 'prop-types';

import Login from '../login/Login';

const blocStyle = {
    position: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
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