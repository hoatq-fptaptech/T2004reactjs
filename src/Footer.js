import React from "react";
import {connect} from "react-redux";

class Footer extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        const items = this.props.items;
        return <div>
            <h1>Cart: {items.length}</h1>
            <ul>
                {
                    items.map((e,k)=>{
                        return <li key={k}>{e.name} --- {e.cart_qty}</li>
                    })
                }
            </ul>
        </div>
    }
}
const mapStateToProps = (state,ownProps) =>{
    return {
        cart_item: state.cart_item,
        items: state.items
    }
}

export default connect(mapStateToProps,null)(Footer);