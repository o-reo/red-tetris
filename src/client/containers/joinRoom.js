import { connect } from 'react-redux';
import JoinRoom from '../components/joinRoom.js';

const joinRoom = () => {
    const userName = document.getElementById("username").value;
    const room = document.getElementById("room").value;
    window.location.href = "http://localhost:3000/#" + room + "[" + userName + "]";
};

const mapStateToProps = () => ({onClick: () => joinRoom()});

export default connect(mapStateToProps)(JoinRoom);