import React, { useContext, useEffect, useState } from 'react'
import '../PlaceOrder/placeorder.css'
import { useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios';
import { MdOutlineCurrencyRupee } from "react-icons/md";

const PlaceOrder = () => {
    const { getTotalCartAmount, product_item_list, cartItems, token, url } = useContext(StoreContext);
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        street: "",
        city: "",
        state: "",
        pincode: "",
        country: "",
        mobile: "",
    })
    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }));
    }

    const placeOrder = async (event) => {
        event.preventDefault();
        let orderItems = [];
        product_item_list.map((item) => {
            if (cartItems[item._id] > 0) {
                let itemInfo = item;
                itemInfo["quantity"] = cartItems[item._id];
                orderItems.push(itemInfo);
            }
        })

        let orderData = {
            address: data,
            items: orderItems,
            amount: getTotalCartAmount() + 2,
        }
        let response = await axios.post(url + "/api/order/place", orderData, { headers: { token } });
        if (response.data.success) {
            const { session_url } = response.data;
            console.log(response.data);
            window.location.replace(session_url);
        }
        else {
            alert("Order failed");
        }
    }
    const navigate = useNavigate();
    useEffect(() => {
        if (!token) {
            navigate("/cart")
        }
        else if (getTotalCartAmount() === 0) {
            navigate("/cart")
        }
    }, [token])
    return (
        <form className='place-order' onSubmit={placeOrder}>
            <div className="place-order-left">
                <p className="delivery-title">Delivery Information</p>
                <div className="multi-fields">
                    <input required className='input-field' name='firstName' onChange={onChangeHandler} value={data.firstName} type='text' placeholder='First Name'></input>
                    <input required className='input-field' name='lastName' onChange={onChangeHandler} value={data.lastName} type='text' placeholder='Last Name'></input>
                </div>

                <input required className='input-field' name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Email Address' />
                <input required className='input-field' name='street' onChange={onChangeHandler} value={data.street} type="text" placeholder='Street' />

                <div className="multi-fields">
                    <input required className='input-field' name='city' onChange={onChangeHandler} value={data.city} type='text' placeholder='City'></input>
                    <input required className='input-field' name='state' onChange={onChangeHandler} value={data.state} type='text' placeholder='State'></input>
                </div>

                <div className="multi-fields">
                    <input required className='input-field' name='pincode' onChange={onChangeHandler} value={data.pincode} type='text' placeholder='Pin-Code'></input>
                    <input required className='input-field' name='country' onChange={onChangeHandler} value={data.country} type='text' placeholder='Country'></input>
                </div>

                <input required className='input-field' name='mobile' onChange={onChangeHandler} value={data.mobile} type="text" placeholder='Mobile Number' />
            </div>


            <div className="place-order-right">
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
                    <button type='submit' className='cart-total-btn'>PROCEED TO PAYMENT</button>
                </div>
            </div>
        </form>
    )
}

export default PlaceOrder
