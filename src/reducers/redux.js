const INIT_STATE = {
    cart_item:0,
    items:[]
}

export function reducer(state = INIT_STATE,action){
    switch (action.type){
        case "load_cart":
            if(localStorage.getItem("cart")!== null){
                const cart = localStorage.getItem("cart");
                state = JSON.parse(cart);
            }
            return state;

        case "add_cart":
            const cart_item = state.cart_item;
            let items = addProductToCart(state.items,action.product);
            state = {cart_item: cart_item+1,items:items};
            localStorage.setItem("cart",JSON.stringify(state))
            return state;
        default:
            return state;
    }
}
function addProductToCart(cart,product){
    let check = false;
    cart.map(e=>{
        if(e.id == product.id){
            e.cart_qty++;
            check = true;
        }
    })
    if(!check){
        product.cart_qty = 1;
        cart.push(product);
    }
    return cart;
}