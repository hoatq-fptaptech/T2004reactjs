import React from "react";
import axios from "axios";
import {API} from "../API";
import {Redirect} from 'react-router-dom';
export default class AddCategory extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            category: {
                name: "",
                image: "",
                description: ""
            },
            redirect:false
        }
        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
    }
    handleChange(e){
       const key = e.target.name;// lay dc name cua input
        const v = e.target.value;// lay dc value cua input ->gia tri vua dien
        let category = this.state.category;
        category[key] = v;// gan gia tri cua property nhu dang array
        this.setState({
            category: category
        })
    }
    submit(event){
        const category = this.state.category;
        const json = JSON.stringify(category);
        axios.post(API.add_category.url,json,{
            headers:{
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':"*"
            }
        }).then(rs=>{
            this.setState({
                redirect:true
            })
        })
        event.preventDefault();
    }
    render() {
        const redirect = this.state.redirect;
        const category = this.state.category;
        return (
            <div>
                {redirect?<Redirect to="/categories"/>:null}
                <h1>Add Category</h1>
                <div className="row">
                    <section className="col-6 text-left">
                        <form onSubmit={this.submit} method="post">
                            <div className="form-group">
                                <label>Name</label>
                                <input name="name" onChange={this.handleChange} value={category.name} className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Image</label>
                                <input name="image"  onChange={this.handleChange} value={category.image} className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Description</label>
                                <textarea name="description" onChange={this.handleChange} value={category.description} className="form-control"></textarea>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-danger">Submit</button>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        );
    }
}