import React from 'react';
import {API} from "./API";
import axios from 'axios';
import {Link} from "react-router-dom";

export default class Categories extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
        }
        this.refresh = this.refresh.bind(this);
    }
    componentDidMount() {
        // const id = this.props.match.params.id;
        axios.get(API.categories.url)
            .then(rs=>{
                this.setState({
                    categories:rs.data,
                })
            })
    }
    async deleteCategory(id){
        const rs = await axios.delete(API.delete_category.url+id);
        if(rs.status === 204){
            this.refresh();
        }else{
            alert("Errors!");
        }
    }
    refresh(){
        axios.get(API.categories.url)
            .then(rs=>{
                this.setState({
                    categories:rs.data,
                })
            })
    }
    render() {
        const categories = this.state.categories;
        return (
            <div>
                <h1>Categories</h1>
                <div className="row">
                    <section className="col-12 text-right">
                        <Link to="/add-category" className="btn btn-primary">Add Category</Link>
                    </section>
                    <section className="col-12">
                        <table className="table">
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Description</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                categories.map((e,k)=>{
                                    return <tr key={k}>
                                        <td>{e.id}</td>
                                        <td>{e.name}</td>
                                        <td><img src={e.image} width={50}/></td>
                                        <td>{e.description}</td>
                                        <td>
                                            <Link className="btn btn-outline-primary" to={"/edit-category/"+e.id}>Edit</Link>&nbsp;
                                            <button type="button" onClick={this.deleteCategory.bind(this,e.id)} className="btn btn-outline-danger">Delete</button>
                                        </td>
                                    </tr>
                                })
                            }
                            </tbody>
                        </table>
                    </section>
                </div>
            </div>
        )
    }
}