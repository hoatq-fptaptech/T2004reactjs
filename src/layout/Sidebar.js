import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'
export default class Sidebar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            categories:[]
        }
    }
    componentDidMount() {
        axios.get("https://foodgroup.herokuapp.com/api/menu")
            .then(rs=>{
                this.setState({
                    categories:rs.data.data
                })
            })
    }

    render() {
        const categories = this.state.categories;
        return (
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                <Link to="/" className="brand-link">
                    <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo"
                         className="brand-image img-circle elevation-3"/>
                        <span className="brand-text font-weight-light">AdminLTE 3</span>
                </Link>
                <div className="sidebar">
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image"/>
                        </div>
                        <div className="info">
                            <a href="#" className="d-block">Alexander Pierce</a>
                        </div>
                    </div>
                    <div className="form-inline">
                        <div className="input-group" data-widget="sidebar-search">
                            <input className="form-control form-control-sidebar" type="search" placeholder="Search"
                                   aria-label="Search"/>
                                <div className="input-group-append">
                                    <button className="btn btn-sidebar">
                                        <i className="fas fa-search fa-fw"></i>
                                    </button>
                                </div>
                        </div>
                    </div>
                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" >
                            <li className="nav-item">
                                <Link to="/" className="nav-link">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>Home</p>
                                </Link>
                            </li>
                            {
                                categories.map((e,k)=>{
                                    return <li key={k} className="nav-item">
                                        <Link to={"/category/"+e.id} className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>{e.name}</p>
                                        </Link>
                                    </li>
                                })
                            }
                        </ul>
                    </nav>
                </div>
            </aside>
        );
    }
}