import React, { useContext } from "react";
import "./CSS/Product.css";
import BreadCramps from "../Components/BreadCrambs/BreadCramps";
import { ShopContext } from "../Contexts/ShopContext";
import { useParams } from "react-router-dom";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";

function Product(props){

    const {all_product} = useContext(ShopContext);
    const {productId} = useParams();
    const product = all_product.find((e)=> e.id === Number(productId))

    return(
        <div>
            <BreadCramps product={product}/> 
            <ProductDisplay product={product}/>
            <DescriptionBox/>
            <RelatedProducts/>
        </div>
    )
}
export default Product;