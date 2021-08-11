import React from 'react';
import {withRouter} from "react-router-dom"
import axios from 'axios'
 class Category extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            category: {},
            products:[]
        }
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        axios.get("https://foodgroup.herokuapp.com/api/category/"+id)
            .then(rs=>{
                const data = rs.data.data;
                this.setState({
                    category:data.category,
                    products: data.foods
                })
            })
    }

    render() {
        const category = this.state.category;
        const products = this.state.products;
        return (
            <div>
                <h1>{category.name}</h1>
                <div className="row">
                    <section className="col-12">
                        <table className="table">
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Description</th>
                                <th>Price</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                products.map((e,k)=>{
                                    return <tr key={k}>
                                        <td>{e.id}</td>
                                        <td>{e.name}</td>
                                        <td><img src={e.image} width={50}/></td>
                                        <td>{e.description}</td>
                                        <td>{e.price}</td>
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
export default withRouter(Category);