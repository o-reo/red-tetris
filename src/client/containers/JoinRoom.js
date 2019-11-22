import { connect } from 'react-redux';
import JoinRoom from '../components/JoinRoom.js';

const joinRoom = () => {
    const userName = document.getElementById("username").value;
    const room = document.getElementById("room").value;
    window.location.href = "http://192.168.43.235:3000/#" + room + "[" + userName + "]";
};

const mapStateToProps = () => ({onClick: () => joinRoom()});

export default connect(mapStateToProps)(JoinRoom);