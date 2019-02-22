import { connect } from 'react-redux';
import LogUser from '../components/LogUser.js';
import { logUser } from "../actions";

const handleDispatch = (dispatch) => {
    window.onload = function () {
        document.getElementById("username").addEventListener("keydown", evt => {
            if (evt.key === "Enter") {
                const userName = evt.target.value;
                dispatch(logUser(userName));
            }
        });
    }
};

const mapStateToProps = (state) => (state);

const mapDispatchToProps = (dispatch) => ({ handleDispatch: handleDispatch(dispatch)} );

export default connect(mapStateToProps, mapDispatchToProps)(LogUser);