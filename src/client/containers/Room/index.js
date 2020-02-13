import {connect} from 'react-redux';

import Room from '../../components/Room';

const mapStateToProps = (state) => ({errors: state.room.errors});

const mapDispatchToProps = dispatch => ({ dispatch: dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(Room);
