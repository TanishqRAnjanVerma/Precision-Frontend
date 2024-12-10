import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { PiCurrencyInrBold } from "react-icons/pi";
import '../MyOrders/myorders.css'
import { asset } from '../../assets/assets';

const MyOrders = () => {

    const { url, token } = useContext(StoreContext);
    const [data, setData] = useState([]);

    const fetchOrders = async () => {
        const response = await axios.post(url + "/api/order/userorders", {}, { headers: { token } });
        setData(response.data.data);

    }

    useEffect(() => {
        if (token) {
            fetchOrders();
        }
    }, [token])

    return (
        <div className='my-orders'>
            <h2>My Orders</h2>
            <div className="container">
                {data.map((order, index) => {
                    return (
                        <div key={index} className='my-orders-order'>
                            <img className="parcel" src={asset.parcel_icon} alt="" />
                            <p className='quantity'>{order.items.map((item, index) => {
                                if (index === order.items.length - 1) {
                                    return item.name + " x" + item.quantity;
                                }
                                else {
                                    return item.name + " x" + item.quantity + ",";
                                }
                            })}</p>

                            <p className='amount'><PiCurrencyInrBold />{order.amount}.00</p>
                            <p className='item-number'>Items : {order.items.length}</p>
                            <p className='status'><span className='pointer'>&#x25cf;</span><b className='status-txt'>{order.status}</b></p>
                            <button onClick={fetchOrders} className='track-btn'>Track Order</button>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default MyOrders;
