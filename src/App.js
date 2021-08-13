import './App.css';
import React from 'react';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import {BrowserRouter} from "react-router-dom";
import Sidebar from './layout/Sidebar'
import {connect} from "react-redux";
class App extends React.Component{
  componentDidMount() {
        this.props.loadCart();
  }

  render(){
    return (
        <BrowserRouter>
        <div className="App">
            <Sidebar/>
            <Main/>
            <Footer/>
        </div>
        </BrowserRouter>
    );
  }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        loadCart: () =>{
            dispatch({type:"load_cart"});
        }
    }
}
export default connect(null,mapDispatchToProps)(App);
