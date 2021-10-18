import { useReducer } from "react";
export const products=[
         {id:1,name:'پیاز',price:1000,code:101001,serial:'mk501',}
        ,{id:2,name:'سیب',price:2000,code:101001,serial:'mk501',}
        ,{id:7,name:'خیار',price:3000,code:101001,serial:'mk501',}
        ,{id:8,name:'موز',price:4000,code:101001,serial:'mk501',}
        ,{id:3,name:'خیار',price:3000,code:101001,serial:'mk501',}
        ,{id:4,name:'موز',price:4000,code:101001,serial:'mk501',}
        ,{id:5,name:'نارنگی',price:5000,code:101001,serial:'mk501',}
        ,{id:6,name:'سیب',price:2000,code:101001,serial:'mk501',}
        ,{id:9,name:'نارنگی',price:5000,code:101001,serial:'mk501',}
        ,{id:10,name:'سیب',price:2000,code:101001,serial:'mk501',}
        ,{id:11,name:'خیار',price:3000,code:101001,serial:'mk501',}
        ,{id:12,name:'موز',price:4000,code:101001,serial:'mk501',}
        ,{id:13,name:'نارنگی',price:5000,code:101001,serial:'mk501',}
        ,{id:14,name:'سیب',price:2000,code:101001,serial:'mk501',}
        ,{id:15,name:'خیار',price:3000,code:101001,serial:'mk501',}
        ,{id:16,name:'موز',price:4000,code:101001,serial:'mk501',}
        ,{id:17,name:'نارنگی',price:5000,code:101001,serial:'mk501',}
        ,{id:18,name:'سیب',price:2000,code:101001,serial:'mk501',}
        ,{id:19,name:'خیار',price:3000,code:101001,serial:'mk501',}
        ,{id:20,name:'موز',price:4000,code:101001,serial:'mk501',}
        ,{id:21,name:'نارنگی',price:5000,code:101001,serial:'mk501',}
        ,{id:22,name:'سیب',price:2000,code:101001,serial:'mk501',}
        ,{id:23,name:'خیار',price:3000,code:101001,serial:'mk501',}
        ,{id:24,name:'موز',price:4000,code:101001,serial:'mk501',}
        ,{id:25,name:'نارنگی',price:5000,code:101001,serial:'mk501',}
      ];

const products2=[
     {id:1,name:'LG TV',serial:'123ef',code:101,unit:'عدد',price:10000,picture:''}
    ,{id:2,name:'Samsung TV',serial:'123ef',code:102,unit:'عدد',price:10000,picture:''}
    ,{id:3,name:'Vaccum Cleaner',serial:'vc 3450',code:103,unit:'عدد',price:10000,picture:''}
    ,{id:4,name:'BOB Spange ',serial:'bs567',code:104,unit:'عدد',price:10000,picture:''}
    ,{id:5,name:'Labtop 15 Sony',serial:'s15',code:105,unit:'عدد',price:10000,picture:''}
    ,{id:6,name:'Samsung S21 Ultra',serial:'s21u',code:106,unit:'عدد',price:10000,picture:''}
    , {id:7,name:'iphone 13',serial:'123ef',code:101,unit:'عدد',price:10000,picture:''}
    ,{id:8,name:'Sony TV',serial:'123ef',code:102,unit:'عدد',price:10000,picture:''}
    ,{id:9,name:'iran',serial:'vc 3450',code:103,unit:'عدد',price:10000,picture:''}
    ,{id:10,name:'Spange ',serial:'bs567',code:104,unit:'عدد',price:10000,picture:''}
    ,{id:11,name:'Labtop 16 lenovo',serial:'s15',code:105,unit:'عدد',price:10000,picture:''}
    ,{id:12,name:'Samsung A51',serial:'s21u',code:106,unit:'عدد',price:10000,picture:''}
    , {id:13,name:'gouya',serial:'123ef',code:101,unit:'عدد',price:10000,picture:''}
    ,{id:14,name:'tehran',serial:'123ef',code:102,unit:'عدد',price:10000,picture:''}
    ,{id:15,name:'table',serial:'vc 3450',code:103,unit:'عدد',price:10000,picture:''}
    ,{id:16,name:'morde ',serial:'bs567',code:104,unit:'عدد',price:10000,picture:''}
    ,{id:17,name:'asan rayane',serial:'s15',code:105,unit:'عدد',price:10000,picture:''}
    ,{id:18,name:'hamvar software',serial:'s21u',code:106,unit:'عدد',price:10000,picture:''}
    ,
]


      export const ProductReducer=(state,action)=>{
switch (action.type) {
    case 'GetAll':
       

        return [...products2];
        break;

    default:
        break;
}

};