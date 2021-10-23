import axios from "axios";
import { useReducer } from "react";






      export   const  ProductReducer= async (state,action)=>{
     console.log('i`, m here ')
switch (action.type) {
       case 'GetAll':
       await  axios.get('http://172.25.4.110:8060/api/products/allproducts2?storeid=0')
        .then((p)=>{
          
             console.log(p.data);
        return[... p.data];
         

        });
 break;

    default:
        break;
}


};


