import DetailProduct from "./DetailProduct";

const Product= (p) => {
    //console.log(p);
    return ( 
        <>
        <dt> {p.product.name} </dt>
         <dd>  
         <p>Price: {p.product.price}</p>
              <p>ID: {p.product.id}</p>
            
            <p>Code: {p.product.code}</p>
            <p>Serial: {p.product.serial}</p>
            <p>unit: {p.product.unit}</p>
            
             </dd>
        </>
     );
}
 
export default Product
;