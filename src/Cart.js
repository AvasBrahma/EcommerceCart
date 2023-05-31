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


handleIncreaseQuantity=(product)=>{
   console.log("Please Increase the product of ", product);
   const {products} = this.state;
   const index=products.indexOf(product);
   products[index].qty+=1;
   this.setState({
    products
    // preoducts means this same thhing products:products as name is same as key
   })
}


handleDecreaseQuantity=(product)=>{
  console.log("Please Decrease the product of ", product);
  const {products} = this.state;
  const index=products.indexOf(product);

  products[index].qty-=1;
  this.setState({
   products
   // preoducts means this same thhing products:products as name is same as key
  })

}
    render(){ 
      const { products }=this.state;
        return(
            <div className="cart">
              {products.map((product)=>{
               return (
               <CartItem 
               product={product} 
               key={product.id}
               onIncreaseQuantity={this.handleIncreaseQuantity}
               onDecreaseQuantity={this.handleDecreaseQuantity}
               />
               
               )
              })}
            
            </div>  
        )
       
    }
}



export default Cart;