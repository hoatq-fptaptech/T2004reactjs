import React from "react";
import Product from "./Product";
import {Switch,Route} from "react-router-dom";
import Home from "./Home";
import Categories from "./Categories"
import AddCategory from "./Category/AddCategory";
import EditCategory from "./Category/EditCategory";
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
                        <Route path="/categories" exact>
                            <Categories/>
                        </Route>
                        <Route path="/add-category" exact>
                            <AddCategory/>
                        </Route>
                        <Route path="/edit-category/:id" exact>
                            <EditCategory/>
                        </Route>
                        {/*<Route path="/category/:id" exact>*/}
                        {/*    <Category />*/}
                        {/*</Route>*/}
                        {/*<Route path="/product/:id" exact>*/}
                        {/*    <Product/>*/}
                        {/*</Route>*/}
                    </Switch>
                </div>
            </section>
            </div>
        )
    }
}