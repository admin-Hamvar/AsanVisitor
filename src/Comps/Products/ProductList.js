import { useContext } from "react";
import { ProductContext } from "../../App";
import Product from "./Product";
import '../blueTable.css';

const ProductList = () => {
    const [products,dispatch]= useContext(ProductContext);
    //console.log('products list:',products,dispatch);
    return ( 
   <div>
     <button onClick={()=>dispatch({type:'GetAll'})} > Product List </button>
    
     <section className="dl-blurbs">
<dl>
   {products.slice(products.length/2,products.length).map((p,index)=> 
      <span  key={index}> 
          <Product product={p}  /> 
        </span>
      )} 
    
    </dl>
    <dl>
   {products.slice(0,products.length/2).map((p,index)=> 
      <span  key={index}> 
          <Product product={p}  /> 
        </span>
      )} 
    
    </dl>
    </section>
    </div>
     );
}
 
export default ProductList;
