import React from "react";
import CartItem from "./CartItem";
class Cart extends React.Component{


  constructor() {
    super();
    this.state={
       products:[
        {
          price: 7999,
          title: 'phone',
          qty: 1,
          img: '',
          id:1
       },
       {
        price: 3999,
        title: 'watch',
        qty: 10,
        img: '',
        id:2
     },
     {
      price: 45999,
      title: 'laptop',
      qty: 6,
      img: '',
      id:3
   }

 
   
       ]
    }

}
    render(){ 
      const { products }=this.state;
        return(
            <div className="cart">
              {products.map((product)=>{
               return <CartItem product={product} key={product.id}/>
              })}
            
            </div>  
        )
       
    }
}



export default Cart;