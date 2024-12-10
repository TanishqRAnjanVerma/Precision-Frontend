import React, { useContext } from 'react'
import '../Cart/cart.css'
import { StoreContext } from '../../context/StoreContext'
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
const Cart = () => {

    const { cartItems, product_item_list, removeFromCart, getTotalCartAmount, url } = useContext(StoreContext);
    const navigate = useNavigate();

    return (
        <div className='cart'>
            <div className='cart-items'>
                <div className="cart-items-title">
                    <p className='title-item'>Items</p>
                    <p className='title-item'>Title</p>
                    <p className='title-item'>Price</p>
                    <p className='title-item'>Quantity</p>
                    <p className='title-item'>Total</p>
                    <p className='title-item'>Remove</p>
                </div>
                <br />
                <hr className='line' />

                {product_item_list.map((item, index) => {
                    if (cartItems[item._id] > 0) {
                        return (
                            < >
                                <div className="cart-items-title  cart-items-item">
                                    <img className='cart-img' src={url + "/images/" + item.image} alt="" />
                                    <p className='title-item'>{item.name}</p>
                                    <p className='title-item'><MdOutlineCurrencyRupee />{item.price}</p>
                                    <p className='title-item'>{cartItems[item._id]}</p>
                                    <p className='title-item'>{item.price * cartItems[item._id]}</p>
                                    <p className='remove' onClick={() => removeFromCart(item._id)}><IoIosCloseCircleOutline /></p>
                                </div>
                                <hr className='line' />
                            </>
                        )
                    }
                })}
            </div>

            <div className="cart-bottom">
                <div className="cart-total">
                    <h2 className='total-header'>Cart Totals</h2>
                    <div className='cart-detail'>
                        <div className="cart-total-details">
                            <p className='title-item'>Subtotal</p>
                            <p className='title-item'><MdOutlineCurrencyRupee />{getTotalCartAmount()}</p>
                        </div>
                        <hr className='line' />
                        <div className="cart-total-details">
                            <p className='title-item'>Delivery Charges</p>
                            <p className='title-item'><MdOutlineCurrencyRupee />{getTotalCartAmount() === 0 ? 0 : 2}</p>
                        </div>
                        <hr className='line' />
                        <div className="cart-total-details">
                            <b className='title-item'>Total</b>
                            <b className='title-item'><MdOutlineCurrencyRupee />{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
                        </div>
                    </div>
                    <button className='cart-total-btn' onClick={() => navigate('/PlaceOrder')}>PROCEED TO CHECKOUT</button>
                </div>

                <div className="cart-promocode">
                    <p className='title-item'>
                        Apply Promocode
                    </p>
                    <div className='cart-promocode-input'>
                        <input className='promocode-input' type="text" placeholder='Promocode' />
                        <button className='promocode-btn'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
