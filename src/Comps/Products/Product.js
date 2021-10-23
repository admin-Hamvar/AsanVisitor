import DetailProduct from "./DetailProduct";
import "./product.css";

const Product= (p) => {
    console.log(p);
    
    return ( 

<>
               
  <td class="item2"><p>{p.product.code}</p></td>
  <td class="item3"><p> {p.product.serial}</p></td>  
  <td class="item4"><p> {p.product.price}</p></td>
  <td class="item5"><p>{p.product.unit}</p></td>
  <td class="item6"> <p> {p.product.name} </p></td>  
</>
       
     );
}
 
export default Product
;