const DetailProduct = (p1) => {
    console.log(p1,1111);
    return ( 
     <table>
        <tr>ID<td></td><td>{p1.product.id}</td></tr>
        <tr>Code<td></td><td>{p1.product.code}</td></tr>
        <tr>Serial<td></td><td>{p1.product.serial}</td></tr>
        <tr>Name<td></td><td>{p1.product.name}</td></tr>
        <tr>Price<td></td><td>{p1.product.price}</td></tr>
        <tr>Picture<td></td><td>
            <img  src={'https://picsum.photos/'+Math.ceil(Math.random()*200)} />
            </td></tr>
        </table> 
     );
}
 
export default DetailProduct;