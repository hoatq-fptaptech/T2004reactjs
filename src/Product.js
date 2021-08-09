import React from "react";
export default class Product extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            cart:0
        }
        this.addToCart = this.addToCart.bind(this);// nap thi vao de su dung trong ham addToCart
    }
    addToCart(){
        const c = this.state.cart;
        this.setState({ // hàm này chạy xong sẽ render lại giao diện
            cart: c+1
        });
    }
    render() {// chỉ cần có sự thay đổi (props, state) thì hàm này sẽ chạy lại
        const name = this.props.name;
        const p = this.props.price;
        const c = this.state.cart;
        return <div>
            <h2>{name}</h2>
            <p>{p}</p>
            <i>Cart: {c}</i>
            <button onClick={this.addToCart} type="button">Add to cart</button>
        </div>
    }
}