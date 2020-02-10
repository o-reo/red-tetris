import React from 'react';

const backgroundPopUp = {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    position: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
};

const popUp = {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    padding: '10px',
    backgroundColor: '#0b1d2d',
};

const errorFont = {
    color: '#61dafb',
    fontFamily: 'sans-serif',
    margin: '10px 20px 10px 20px',
};

const crossContainer = {
    alignSelf: 'flex-end',
    backgroundColor: 'white',
    height: '30px',
    width: '30px',
    borderRadius: '15px'
};

const cross = {
    fontSize: '20px',
    color: 'red',
    fontFamily: 'sans-serif',
    margin: '0'
};

function PopUp({errors, deleteErrors}) {
    return (
        <div style={backgroundPopUp}>
            <div style={popUp}>
                <button style={crossContainer}>
                    <p style={cross} onClick={deleteErrors}>x</p>
                </button>
                {errors.map((error) => <p key={error.id} style={errorFont}>{error.message}</p>)}
            </div>
        </div>
    )
}

export default PopUp;