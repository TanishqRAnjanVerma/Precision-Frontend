import React, { useContext, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext';
import { HashLoader } from 'react-spinners'
import "../Verify/verify.css"
import axios from 'axios';

const Verify = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const success = searchParams.get("success");
    const orderId = searchParams.get("orderId");
    const { url } = useContext(StoreContext);
    const navigate = useNavigate();

    const verifyPayment = async () => {
        const response = await axios.post(url + "/api/order/verify", { success, orderId });
        if (response.data.success) {
            navigate("/myorders");
        }
        else {
            navigate("/");
        }
    }
    useEffect(() => {
        verifyPayment()
    }, [])
    return (
        <div className='verify'>
            <HashLoader
                color="#0b4fff"
                cssOverride={{}}
                loading
                size={80}
                speedMultiplier={1}
            />

        </div>
    )
}

export default Verify;
