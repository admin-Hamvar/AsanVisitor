import logo from './logo.svg';
import './App.css';
import React,{createContext, useReducer} from 'react';
import ProductList from './Comps/Products/ProductList';
import { ProductReducer, products } from './Comps/Products/ProductService';
import ProductList2 from './Comps/Products/Productlist2';


export const ProductContext=createContext();
function App() {
  const ProductReducer1=useReducer(ProductReducer,[]);
  return (
   
<ProductContext.Provider value={ProductReducer1} >
   <div className="App">
   {/* <ProductList /> */}
  <ProductList2 />
  <p>all right reserved </p>

    </div>
    </ProductContext.Provider>
  );
}

export default App;
