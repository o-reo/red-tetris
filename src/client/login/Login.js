import React from 'react';
import {connect} from 'react-redux';

import {checkAvailability, deleteErrors} from './loginActions';

const blockStyle = {
    padding: '20px',
    backgroundColor: '#0b1d2d',
};

const fontStyle = {
    margin: '3vh 0 1vh 0',
    color: '#61dafb',
    fontFamily: 'Permanent Marker',
    fontSize: '3vh',
    fontWeight: '300',
    textAlign: 'center',
};

const buttonStyle = {
    width: '15vh',
    marginTop: '1vh',
    fontSize: '2vh',
    fontWeight: '300',
    textAlign: 'center',
};

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

const form = {
    display: 'flex',
    flexDirection: 'column',
    alignItems:  'center'
};

function authenticate(e, checkAvailability) {
    const username = document.getElementById("username").value;
    const room = document.getElementById("room").value;

    e.preventDefault();
    checkAvailability(username, room);
}

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

function Login({errors, checkAvailability, deleteErrors}) {
    return (
        <div style={blockStyle}>
            <form style={form} onSubmit={(e) => authenticate(e, checkAvailability)}>
                <label style={fontStyle}>
                    ENTER A USERNAME
                </label>
                <input type="text" id="username" required/>
                <label style={fontStyle}>
                    ENTER A ROOM
                </label>
                <input type="text" id="room" required/>
                <button style={buttonStyle} type="submit">Join game</button>
            </form>
            {errors !== null && errors !== undefined ?
                <PopUp
                    errors={errors}
                    deleteErrors={deleteErrors}
                /> :
                null
            }
        </div>
    );
}

const mapStateToProps = (state) => {
    const errors = state.login.errors;
    return ({errors});
};

const mapDispatchToProps = (dispatch) => ({
    checkAvailability: (userName, room) => dispatch(checkAvailability(userName, room)),
    deleteErrors: () => dispatch(deleteErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);