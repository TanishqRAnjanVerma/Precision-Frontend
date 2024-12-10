import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import '../ProductDetails/productdetails.css'


const ProductDetails = () => {
    const { id } = useParams(); // Get the product ID from the URL
    const { url, product_item_list, token } = useContext(StoreContext); // Use token from context for review submission
    const [product, setProduct] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [newReview, setNewReview] = useState(''); // For the review input
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [relatedProducts, setRelatedProducts] = useState([]);

    // Fetch product details and reviews
    useEffect(() => {
        const productData = product_item_list.find(item => item._id === id);
        setProduct(productData);

        // Fetch reviews for the product
        axios.get(`${url}/api/reviews/${id}`).then((response) => {
            setReviews(response.data);
        });
    }, [id, product_item_list, url]);

    // Handle review submission
    const handleReviewSubmit = async (e) => {
        e.preventDefault();

        if (!newReview) {
            setErrorMessage('Review cannot be empty');
            return;
        }

        try {
            const response = await axios.post(`${url}/api/reviews/${id}`,
                { comment: newReview },
                { headers: { token } }
            );

            setReviews(prev => [...prev, response.data]); // Append the new review to the list
            setNewReview(''); // Clear the input field
            setSuccessMessage('Review submitted successfully!');
            setErrorMessage('');
        } catch (error) {
            setErrorMessage('Failed to submit review');
            setSuccessMessage('');
        }
    };

    if (!product) return <div>Loading...</div>;

    return (
        <div className="product-details-page">
            <div className="product-details">
                <div className="product-img">
                    <img className="product-details-img" src={url + "/images/" + product.image} alt={product.name} />
                </div>

                <div className="product-details-info">
                    <h1>{product.name}</h1>
                    <p>{product.desc_1}</p>
                    <p>{product.desc_2}</p>
                    <p><strong>Price:</strong> ₹{product.price}</p>

                    {/* Review Form */}
                    <div className="review-section">
                        <h3 className='review-header'>Write a Review</h3>
                        <form onSubmit={handleReviewSubmit} className='review-form'>
                            <textarea
                                value={newReview}
                                onChange={(e) => setNewReview(e.target.value)}
                                placeholder="Write your review here"
                                rows="4"
                                className="review-input"
                            />
                            <button type="submit" className="submit-review-btn">Submit Review</button>
                        </form>
                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                        {successMessage && <p className="success-message">{successMessage}</p>}
                    </div>

                    {/* Display Reviews
                    <div className="reviews">
                        <h3>Reviews</h3>
                        {reviews.length ? (
                            reviews.map((review, index) => (
                                <div key={index} className="review">
                                    <p><strong>{review.user || 'Anonymous'}</strong></p>
                                    <p>{review.comment}</p>
                                </div>
                            ))
                        ) : (
                            <p>No reviews yet.</p>
                        )}
                    </div> */}


                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
