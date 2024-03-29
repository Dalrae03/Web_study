import './index.css';
import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { API_URL } from '../config/constants';

dayjs.extend(relativeTime);

function MainPage(){
    const [products, setProducts]= React.useState([]);  //state 사용
    React.useEffect(  //useEffect 사용
        function(){
            axios.get(`${API_URL}/products`) 
        .then(function(results){
            const products = results.data.products;
            setProducts(products);
        }).catch(function(error){
            console.error('에러 발생 : ',error);
        })
        },[]);
        
    return (
        <div>
            <div id="banner">
                <img src="images/banners/banner1.png" />
            </div>
            <h1 id='product-headline'>판매되는 상품들</h1>
            <div id="product-list">
                {products.map(function(product, index){ //js문법 map사용
                    return(
                        <div className="product-card">
                            <Link className="product-link" to={`/products/${product.id}`}> 
                                <div>
                                    <img className="product-img" src={`${API_URL}/${product.imageUrl}`} />
                                </div>
                                <div className="product-contents">
                                    <span className="product-name">
                                        {product.name}
                                    </span>
                                    <span className="product-price">
                                        {product.price}원
                                    </span>
                                    <div className='product-footer'>
                                    <div className="product-seller">
                                        <img className="product-avatar" src='images/icons/avatar.png' />
                                        <span>{product.seller}</span>
                                    </div>
                                    <span className='product-date'>
                                        {dayjs(product.createdAt).fromNow()}
                                    </span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    );
                    })
                }
            </div>
    </div>
);
}

export default MainPage;

// `/products/${index}` (ES6 ternary return)= "/products/"+index