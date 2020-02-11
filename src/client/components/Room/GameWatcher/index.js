import React from 'react';

import Square from "../Square";

const gameWatcherStyle = {
    justifySelf: 'end',
    width: '22vh',
    height: '70vh',
    margin: '12.8vh 0 0 0',
    padding: '2vh 2vh 0 2vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#0b1d2d',
    borderColor: '#0b1d2d',
    borderWidth: '1vh 2vh 0 2vh',
    borderStyle: 'outset',
};

const spectrumStyle = {
    color: 'white'
};

const specBoardType = {
    width: '13vh',
    height: '20vh',
    display: 'flex',
    flexWrap: 'wrap',
    padding: '0',
    margin: '0',
};

const Spectrum = ({playerName, spectrum}) =>
    <div style={spectrumStyle}>
        {playerName}
        <div style={specBoardType}>
            {
                spectrum.map(line =>
                        line.map(bloc => bloc === 1 ?
                        <Square color={'realwhite'} size={{width: '1vh', height: '1vh', borderWidth: '0.1vh'}}/> :
                        <Square color={'white'} size={{width: '1vh', height: '1vh', borderWidth: '0.1vh'}}/>)
                )
            }
        </div>
    </div>;

export default ({players}) => {
    return (
        <div style={gameWatcherStyle}>
            <div>
                {
                    Object.values(players).map((player, index) => {
                            return (<Spectrum
                                key={index}
                                playerName={player.username}
                                spectrum={player.spectrum}
                            />)
                        }
                    )
                }
            </div>
        </div>);
}
