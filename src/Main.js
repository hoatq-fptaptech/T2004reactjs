import React from "react";
import Product from "./Product";
export default class Main extends React.Component{
    render() {
        const ls = [
            {
                name:"Sp 1",
                price:100
            },
            {
                name:"Sp 2",
                price:200
            }
        ];
        return <div>
            <h1>Danh sách sản phẩm</h1>
            <ul>
                {
                  ls.map((e,k)=>{
                      return  <li key={k}>
                          <Product name={e.name} price={e.price}/>
                      </li>
                  })
                }
            </ul>
        </div>
    }
}