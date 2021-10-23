import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../App";
import Product from "./Product";
import '../btn.css';
import "./product.css";
import axios from "axios";



 const  ProductList2 = () => {
    const [products,setProducts]= useState([]);
    console.log('products list:',products);

const GetProducts=()=>{
   axios.get('http://172.25.4.110:8060/api/products/allproducts2?storeid=0')
.then((p)=>{
     setProducts([... p.data]);
});}

    useEffect(()=>{
       GetProducts();

    },[])


  //  console.log('pc:S',products.length);
    return ( 
 
 
 
<div className="row text-center ">
     <div className="col-sm-2" >
     <p> سمت چپ</p>
     <button class="btn" >
     <p>عنوان 1</p>
      </button>
      <button className="btn" onClick={GetProducts} >
     <p>دریافت کالاها</p>
      </button>
     <button className="btn" >
     <p>عنوان 3</p>
      </button>

     </div>
     <div className="col-sm-7 ">
      <h1><abbr title="لیست تمام کالا در این قسمت"> لیست کالا </abbr></h1>
      
     <table className="table table-striped table-hover" >
       <thead className="thead-dark " >
           <tr className="header">
             <th className="table-danger"> <p><abbr title="کد کالاهای تعریف شده در معرفی کالا  "> کد کالا </abbr></p></th>
             <th className="table-danger"> <p><abbr title="سریال ثابت کالاها "> سریال کالا </abbr></p> </th>
             <th className="table-danger"> <p><abbr title="میانگینی از فی خرید کالاهای باقیمانده "> فی خرید  </abbr></p> </th>
             <th className="table-danger"><p><abbr title=" مانده تعدادی هر کالا "> موجودی  </abbr></p> </th>
             <th className="table-danger"> <p><abbr title="لیست تمام کالا در این قسمت"> نام کالا </abbr></p> </th>
           </tr>
       </thead>
       <tbody>
       {
      
        products.map((p,index)=> 
      <tr  key={index}> 
          <Product product={p} /> 
        </tr>
      )}
       </tbody>
     </table>
     </div>
     <div class="col-sm-3" >
       <p> سمت راست </p>
     </div>
  </div> 


    


    
    
  
 

     );
}
 
export default ProductList2;
