import {connect} from 'react-redux';

import DisplayInterval from '../../../components/Room/GameController/DisplayInterval';

const mapStateToProps = (state) => ({intervalMove: state.room.intervalMove,});

export default connect(mapStateToProps)(DisplayInterval);
