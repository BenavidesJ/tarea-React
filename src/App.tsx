import React from 'react';
import './App.css';
import { Product,MainTable } from './components/Table';
import {Cards} from './components/Cards';

type MyState = {
  products:Product[];
}

class App extends React.Component<{},MyState> {
  state: MyState ={

    products: [
      {
        name: "T-Shirt",
        id: 1,
        quantity: 10,
        description: "Small/Medium/X-Large size"
      },
      {
        name: "Sneackers",
        id: 2,
        quantity: 15,
        description: "Vans"
      },
      {
        name: "Pants",
        id: 3,
        quantity: 10,
        description: "Small/Medium/X-Large size"
      },
      {
        name: "Hoddie",
        id: 4,
        quantity: 10,
        description: "Adidas"
      },
    ]
  }

  buyProduct = (index:any) =>{
    const { products } = this.state;
    this.setState({
     products: products.filter((_, i) => {
       return i !== index
     }),
   })
  }

  
  render(){
    return (
      <div>
        <MainTable products={this.state.products} buyProduct={this.buyProduct}/>
        <Cards products={this.state.products}/>
      </div>
      
        
    );
  }
}

export default App;