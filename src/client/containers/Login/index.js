import {connect} from 'react-redux';

import Login from '../../components/Login';
import {checkAvailability, deleteErrors} from "../../actions/env";

const mapStateToProps = (state) => (
    {errors: state.login.errors}
);

const mapDispatchToProps = (dispatch) => ({
    checkAvailability: (userName, room) => dispatch(checkAvailability(userName, room)),
    deleteErrors: () => dispatch(deleteErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
