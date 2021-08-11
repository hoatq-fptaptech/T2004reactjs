import React from "react";
import Product from "./Product";
import {Switch,Route} from "react-router-dom";
import Home from "./Home";
import Category from "./Category"
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
                        <Route path="/category/:id" exact>
                            <Category />
                        </Route>
                        <Route path="/product/:id" exact>
                            <Product/>
                        </Route>
                    </Switch>
                </div>
            </section>
            </div>
        )
    }
}