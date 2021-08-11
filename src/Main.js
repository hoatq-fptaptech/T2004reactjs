import React from "react";
import Product from "./Product";
import {Switch,Route} from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
export default class Main extends React.Component{
    render() {
        return (
            <div className="content-wrapper">
            <section className="content">
                <div className="container-fluid">
                    <Switch>
                        <Route path="/" exact>
                            <Home/>
                        </Route>
                        <Route path="/about-us" exact>
                            <AboutUs/>
                        </Route>
                    </Switch>
                </div>
            </section>
            </div>
        )
    }
}