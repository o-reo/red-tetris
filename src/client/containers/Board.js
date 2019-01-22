import { connect } from 'react-redux';
import Board from '../components/Board.js'

function mapStateToProps(state) {
    return (state.game);
}

export default connect(
    mapStateToProps
)(Board);