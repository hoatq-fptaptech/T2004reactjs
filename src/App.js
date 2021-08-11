import './App.css';
import React from 'react';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import {BrowserRouter} from "react-router-dom";
import Sidebar from './layout/Sidebar'
class App extends React.Component{
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
export default App;
