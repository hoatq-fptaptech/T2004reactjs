import React from 'react';
import axios from 'axios';
import {connect} from "react-redux";
class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            products:[]
        }
      //  this.addToCart = this.addToCart.bind(this);
    }
    componentDidMount() { // sẽ thực thi sau khi render lần đầu tiên
        // lấy dữ liệu từ api để nạp cho products trong state
        axios.get("https://foodgroup.herokuapp.com/api/today-special")
            .then(rs=>{
                this.setState({
                    products:rs.data.data
                })
            })
    }
    addToCart(p){
        this.props.addCart(p);
    }
    render() {
        const products = this.state.products;
        return (
            <div>
            <div className="row">
                <div className="col-lg-3 col-6">
                    <div className="small-box bg-info">
                        <div className="inner">
                            <h3>150</h3>

                            <p>New Orders</p>
                        </div>
                        <div className="icon">
                            <i className="ion ion-bag"></i>
                        </div>
                        <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
                    </div>
                </div>
                <div className="col-lg-3 col-6">
                    <div className="small-box bg-success">
                        <div className="inner">
                            <h3>53<sup>%</sup></h3>

                            <p>Bounce Rate</p>
                        </div>
                        <div className="icon">
                            <i className="ion ion-stats-bars"></i>
                        </div>
                        <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
                    </div>
                </div>
                <div className="col-lg-3 col-6">
                    <div className="small-box bg-warning">
                        <div className="inner">
                            <h3>44</h3>

                            <p>User Registrations</p>
                        </div>
                        <div className="icon">
                            <i className="ion ion-person-add"></i>
                        </div>
                        <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
                    </div>
                </div>
                <div className="col-lg-3 col-6">
                    <div className="small-box bg-danger">
                        <div className="inner">
                            <h3>65</h3>

                            <p>Unique Visitors</p>
                        </div>
                        <div className="icon">
                            <i className="ion ion-pie-graph"></i>
                        </div>
                        <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
                    </div>
                </div>
            </div>
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
                                <th></th>
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
                                    <td><button type="button" onClick={this.addToCart.bind(this,e)} className="btn btn-danger">Add Cart</button></td>
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
const mapDispatchToProps = (dispatch)=>{
    return {
        addCart: p =>{
            dispatch({type:"add_cart",product:p});
        }
    }
}
export default connect(null,mapDispatchToProps)(Home);