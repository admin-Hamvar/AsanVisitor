import DetailProduct from "./DetailProduct";
import "./product.css";

const Product= (p) => {
    console.log(p);
    
    return ( 

<>
               
  {/* <td className="item2"><p>{p.product.code}</p></td>
  <td className="item3"><p> {p.product.serial}</p></td>  
  <td className="item4"><p> {p.product.price}</p></td>
  <td className="item5"><p>{p.product.unit}</p></td> */}
  <td className="item6"> <p> {p.product.ProductName} </p></td>  
</>
       
     );
}
 
export default Product
;