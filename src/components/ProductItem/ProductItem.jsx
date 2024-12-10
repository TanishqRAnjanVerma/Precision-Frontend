import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FaStar, FaStarHalf } from "react-icons/fa";
import { MdCurrencyRupee } from "react-icons/md";
import '../ProductItem/productitem.css'
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { StoreContext } from '../../context/StoreContext';

const ProductItem = ({ id, name, image, price, desc_1, desc_2 }) => {

    const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext);
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/${category.toLowerCase()}`);
    };


    return (
        <div className='product-item' onClick={handleClick}>
            <Link to={`/product/${id}`}>
                <img className="product-item-img" src={url + "/images/" + image} alt="" />
            </Link>


            <div className="product-item-info">
                <div className="product-section-1">
                    <p className='product-name'>{name}</p>

                    <div className="product-details">
                        <div className="product-info-1">
                            <div className="rating">
                                <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalf />
                            </div>
                            <p className='product-price'><MdCurrencyRupee />{price}</p>
                        </div>

                        {!cartItems[id]
                            ?
                            <div className="product-info-2">
                                <button className='buynow' onClick={() => addToCart(id)}>Buy Now</button>
                            </div>
                            : <div className="product-item-counter">
                                <div className='minus' onClick={() => removeFromCart(id)}><CiCircleMinus className='minus-icon' /></div>
                                <p className='count'>{cartItems[id]}</p>
                                <div className='plus' onClick={() => addToCart(id)}><CiCirclePlus className='plus-icon' /></div>
                            </div>
                        }

                    </div>

                </div>
                <hr />
                <div className="product-section-2">
                    <p className="product-description">
                        <li>{desc_1}</li>
                    </p>
                    <p className="product-description">
                        <li>{desc_2}</li>
                    </p>
                </div>
            </div>

        </div>
    )
}

export default ProductItem
