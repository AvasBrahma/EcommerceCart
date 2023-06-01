import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
class App extends React.Component{


  constructor() {
    super();
    this.state={
       products:[
        {
          price: 7999,
          title: 'phone',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80',
          id:1
       },
       {
        price: 3999,
        title: 'watch',
        qty: 10,
        img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80',
        id:2
     },
     {
      price: 45999,
      title: 'laptop',
      qty: 6,
      img: 'https://images.unsplash.com/photo-1526657782461-9fe13402a841?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=784&q=80',
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
  
  if(products[index].qty==0){
    return
  }
  products[index].qty-=1;
  this.setState({
   products
   // preoducts means this same thhing products:products as name is same as key
  })

}

handleDeleteProduct=(id)=>{
  const {products} = this.state;
  const items=products.filter((item)=>item.id!=id);

  this.setState({
    products:items
   
   })

}

getCartCount=()=>{
  const {products}=this.state;

  let count=0;
  products.forEach((product)=> {
    count+=product.qty;
    
  });
  return count;
}

getTotalPrice=()=>{
  const {products}=this.state;

  let totalPrice=0;
  products.map((product)=> {

    totalPrice=totalPrice+product.qty*product.price;
    
  });

  return totalPrice;

}
  render(){
     const {products}=this.state
  return (
    <div className="App">
      < Navbar count={this.getCartCount()}  />
       < Cart
        products={products}
        onIncreaseQuantity={this.handleIncreaseQuantity}
        onDecreaseQuantity={this.handleDecreaseQuantity}
        onDeleteProduct={this.handleDeleteProduct}
        />
        <div style={{padding:10, fontSize:20 }}>Total Price: {this.getTotalPrice()}</div>
    </div>
  );
  }
}

export default App;
