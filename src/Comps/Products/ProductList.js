import { useContext } from "react";
import { ProductContext } from "../../App";
import Product from "./Product";
import '../btn.css';
import "./product.css";
 


const ProductList = () => {
    const [products,dispatch]= useContext(ProductContext);
    //console.log('products list:',products,dispatch);
    //console.log('pc:S',products.length);
    return ( 
   <div>
     <button class="btn" onClick={()=>dispatch({type:'GetAll'})} >
     <p>دریافت کالاها</p>
      </button>
    

    
{products.length >0 ? <>
      <tr class="grid-container" >
          <th>نام کالا</th>
          <th>سریال کالا</th>
          <th>فی خرید</th>
          <th>تعداد </th>
          <th>کد کالا</th>
</tr></>: null
}
   {products.map((p,index)=> 
      <span  key={index}> 
          <Product product={p} BackgroundColor={index %2==1?"#808282":"white"} /> 
        </span>
      )} 
    
    
  
 
    </div>
     );
}
 
export default ProductList;
