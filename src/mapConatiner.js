import { connect } from 'react-redux'
import App from './App'
import { increment, decrement, reset } from '../actions';

const mapStateToProps = (state) => {
   return {
      cityA: state.cityA,
      cityB: state.cityB
   };
};
const mapDispatchToProps = (dispatch) => {
   return {
      getCity: () => dispatch(increment()),
      
   };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
