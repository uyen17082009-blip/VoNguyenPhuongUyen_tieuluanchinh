import React, { useEffect, useState } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import { imageMap } from '../../utils/productImage.js';
import './DetailProduct.css';

const DetailProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const [product, setProduct] = useState(location.state?.product || null);
    const [isLoading, setIsLoading] = useState(!location.state?.product);
    const [error, setError] = useState(null);

    const [userRating, setUserRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    useEffect(() => {
        if (product) return;
        const fetchProduct = async () => {
            try {
                const response = await fetch('/product.json');
                if (!response.ok) throw new Error('Không thể tải thông tin sản phẩm');
                const data = await response.json();
                const found = data.find((item) => String(item.id) === String(id));
                if (!found) throw new Error('Sản phẩm không tồn tại');

                setProduct({
                    ...found,
                    image: imageMap[found.imageKey] || found.image
                });
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };
        fetchProduct();
    }, [id, product]);

    const handleAddToCart = () => {
        const savedCart = localStorage.getItem('cart');
        const cart = savedCart ? JSON.parse(savedCart) : [];
        const existingItemIndex = cart.findIndex(item => item.id === product.id);
        if (existingItemIndex >= 0) {
            cart[existingItemIndex].quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        window.dispatchEvent(new Event('cartUpdated'));
        navigate('/cart');
    };

    if (isLoading) return <div className="detail-container">Đang tải...</div>;
    if (error) return <div className="detail-container">Lỗi: {error}</div>;
    if (!product) return null;

    return (
        <div className="detail-container">
            <div className="product-main-section">
                <div className="detail-image-wrapper">
                    <img src={product.image || 'https://via.placeholder.com/500'} alt={product.name} />
                </div>

                <div className="detail-info-wrapper">
                    <h1 className="product-title">{product.name}</h1>
                    <p className="product-price-display">{product.currentPrice}</p>

                    <div className="product-description-item">
                        <h4>THÍCH HỢP VỚI</h4>
                        <p>{product.suitableFor || "Da thường tới da khô, da nhạy cảm tới rất nhạy cảm"}</p>
                    </div>

                    <div className="product-description-item">
                        <h4>THÀNH PHẦN CHÍNH</h4>
                        <p>{product.ingredients || "Chiết xuất sen, Squalane và phức hợp prebiotics."}</p>
                    </div>

                    <button className="add-to-cart-banner" onClick={handleAddToCart}>
                        THÊM VÀO GIỎ
                    </button>

                    <div className="detail-footer-actions">
                        <span>Chia sẻ</span>
                        <span>Viết đánh giá</span>
                    </div>
                </div>
            </div>

            <div className="reviews-section">
                <div className="reviews-summary">
                    <div className="rating-left">
                        <h3>Đánh giá từ khách hàng</h3>
                        <div className="rating-flex-box">
                            <div className="big-score">5.0</div>
                            <div className="rating-column-stack">
                                {[5, 4, 3, 2, 1].map((star) => (
                                    <div key={star} className="rating-row-line">
                                        <div className="hearts-row">
                                            {[...Array(5)].map((_, i) => (
                                                <span key={i} className={i < star ? "heart filled" : "heart"}>❤</span>
                                            ))}
                                        </div>
                                        {star === 5 && <span className="count-label">(5K)</span>}
                                        {star === 4 && <span className="count-label">(0)</span>}
                                        {star === 3 && <span className="count-label">(0)</span>}
                                        {star === 2 && <span className="count-label">(0)</span>}
                                        {star === 1 && <span className="count-label">(0)</span>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="rating-right">
                        <h3>Đánh giá của bạn</h3>
                        <div className="interactive-stars">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <span
                                    key={star}
                                    className={`star-clickable ${star <= (hoverRating || userRating) ? 'active' : ''}`}
                                    onClick={() => setUserRating(star)}
                                    onMouseEnter={() => setHoverRating(star)}
                                    onMouseLeave={() => setHoverRating(0)}
                                >
                                    ❤
                                </span>
                            ))}
                        </div>
                        <textarea placeholder="Chia sẻ cảm nhận của bạn về sản phẩm..."></textarea>
                        <div className="review-buttons">
                            <button className="btn-upload">Thêm hình ảnh</button>
                            <button className="btn-submit">Gửi đánh giá</button>
                        </div>
                    </div>
                </div>

                <div className="individual-review">
                    <div className="review-flex-container">
                        <div className="reviewer-side">
                            <h4 className="reviewer-name">KHÁCH HÀNG ẨN DANH</h4>
                            <p className="reviewer-detail">Da thường</p>
                            <p className="reviewer-detail">Số lần đánh giá: 1</p>
                        </div>

                        <div className="content-side">
                            <div className="content-top-line">
                                <div className="stars-row-hearts">
                                    <span className="heart-pink">❤</span>
                                    <span className="heart-pink">❤</span>
                                    <span className="heart-pink">❤</span>
                                    <span className="heart-pink">❤</span>
                                    <span className="heart-pink">❤</span>
                                </div>
                                <span className="date-stamp">08/10/2024</span>
                            </div>

                            <div className="content-body-text">
                                <h4 className="review-heading">Tôi đã sử dụng sản phẩm và rất hợp</h4>
                                <p className="review-para">Tuyệt vời.</p>
                            </div>

                            <div className="content-bottom-actions">
                                <span className="useful-label">Đánh giá hữu ích?</span>
                                <div className="interaction-item">
                                    <span className="icon"><i className="fa-regular fa-thumbs-up" style={{ color: '#ffb7c5' }}></i></span>
                                    <span className="value">5K</span>
                                </div>
                                <div className="interaction-item">
                                    <span className="icon"><i className="fa-regular fa-thumbs-down" style={{ color: '#ffb7c5' }}></i></span>
                                    <span className="value">0</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailProduct;
