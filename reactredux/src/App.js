import React, { Component } from 'react';
import store from './store';
import { add } from './Action';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div>
        <h1>react redux</h1>
        <button onClick={() => { store.dispatch(add()) }}>add</button>
        <p>count:{store.getState().count}</p>
        <p>count:{this.props.count}</p>
      </div>
    )
  }
}
const mapStateToProps = (state) =>{
  return{
    count:state.count
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    add:()=>dispatch(add())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);