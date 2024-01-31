import { useParams } from "react-router-dom";

function Product()
{
    const {productCategory} = useParams();
    return <>
    <h1>{productCategory}</h1>
    </>
}
export default Product;