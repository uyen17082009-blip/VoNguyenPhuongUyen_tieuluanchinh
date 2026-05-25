import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductCard.css';

const productsUrl = `${import.meta.env.BASE_URL}product.json`;

const ProductCard = ({ product }) => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    
    const [selectedSize, setSelectedSize] = useState('M');

    const handleBuy = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(productsUrl);
            if (!response.ok) throw new Error('Không thể tải thông tin sản phẩm');
            
            const data = await response.json();
            const matchedProduct = data.find((item) => item.id === product.id);
            
            if (!matchedProduct) throw new Error('Sản phẩm không tồn tại');

            navigate(`/product/${product.id}`, {
                state: {
                    product: { ...matchedProduct, image: product.image }
                }
            });
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    const getPriceDisplay = () => {
        if (selectedSize === 'S' && product.priceS) {
            return {
                current: product.priceS,
                original: product.originalPriceS || product.originalPrice
            };
        }
        if (selectedSize === 'L' && product.priceL) {
            return {
                current: product.priceL,
                original: product.originalPriceL || product.originalPrice
            };
        }
        return {
            current: product.priceM || product.currentPrice,
            original: product.originalPriceM || product.originalPrice
        };
    };

    const { current, original } = getPriceDisplay();

    return (
        <div className="product-card">
            <div className="product-image-container">
                <img
                    src={product.image || 'https://via.placeholder.com/300x200'} 
                    alt={product.name} 
                    className="product-image"
                />
            </div>

            <h3 className="product-name">{product.name}</h3>

            <div className="product-ram-ssd">
                {product.sizeS && (
                    <button 
                        className={`ram-ssd-tag ${selectedSize === 'S' ? 'active' : ''}`}
                        onClick={() => setSelectedSize('S')}
                    >
                        {product.sizeS}
                    </button>
                )}
                {product.sizeM && (
                    <button 
                        className={`ram-ssd-tag ${selectedSize === 'M' ? 'active' : ''}`}
                        onClick={() => setSelectedSize('M')}
                    >
                        {product.sizeM}
                    </button>
                )}
                {product.sizeL && (
                    <button 
                        className={`ram-ssd-tag ${selectedSize === 'L' ? 'active' : ''}`}
                        onClick={() => setSelectedSize('L')}
                    >
                        {product.sizeL}
                    </button>
                )}
            </div>

            <div className="product-pricing">
                <div className="current-price">{current}đ</div>
                <div className="original-price-section">
                    <span className="original-price">{original}đ</span>
                    {product.discount && <span className="discount">{product.discount}</span>}
                </div>
            </div>
            
            <div className="product-rating-sales">
                <span className="rating">❤ {product.rating}</span>
                <span className="sales">Đã bán {product.sold}</span>
            </div>

            <button className="compare-button" onClick={handleBuy} disabled={isLoading}>
                {isLoading ? 'Đang mở...' : 'Mua ngay'}
            </button>
            {error && <div className="error-text">{error}</div>}
        </div>
    );
};

export default ProductCard;