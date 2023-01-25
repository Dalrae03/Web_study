import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import { useEffect, useState } from "react";

function ProductPage(){
    const {id} = useParams();
    const [product, setProduct] = useState(null);
    useEffect(function() {
        axios.get(`https://cb42e1a2-1c38-4a71-a5da-aa11e68047d4.mock.pstmn.io/products/${id}`)
        .then(function(result){
            setProduct(result.data);
            console.log(result);
        }).catch(function(error){
            console.error(error);
        });
    },[]);
    console.log(product);
    return <h1>상품 상세 페이지 {id} 상품</h1>;
}

export default ProductPage;