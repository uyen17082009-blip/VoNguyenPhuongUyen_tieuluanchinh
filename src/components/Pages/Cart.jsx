import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { imageMap } from '../../utils/productImage';
import './Cart.css';

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [couponCode, setCouponCode] = useState('');

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  const updateCart = (newCart) => {
    setCartItems(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const increaseQuantity = (productId) => {
    const updatedCart = cartItems.map(item =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    updateCart(updatedCart);
  };

  const decreaseQuantity = (productId) => {
    const updatedCart = cartItems.map(item => {
      if (item.id === productId) {
        return item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : null;
      }
      return item;
    }).filter(Boolean);
    updateCart(updatedCart);
  };

  const removeItem = (productId) => {
    const updatedCart = cartItems.filter(item => item.id !== productId);
    updateCart(updatedCart);
  };

  const parsePrice = (priceStr) => {
    if (!priceStr) return 0;
    return parseFloat(priceStr.replace(/[^\d]/g, '')) || 0;
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => {
      return total + (parsePrice(item.currentPrice) * item.quantity);
    }, 0);
  };

  const calculateTotalDiscount = () => {
    return cartItems.reduce((total, item) => {
      const original = parsePrice(item.originalPrice);
      const current = parsePrice(item.currentPrice);
      if (original > current) {
        return total + ((original - current) * item.quantity);
      }
      return total;
    }, 0);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN').format(price) + 'đ';
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-container">
        <div className="cart-empty-wrapper">
          <div className="cart-empty-card">
            <div className="empty-illustration">
              <div className="circle-bg"></div>
              <div className="cart-icon-animated"><i class="fa-solid fa-basket-shopping" style={{ color: '#76637e' }}></i></div>
            </div>
            <h2 className="empty-title">Giỏ hàng của bạn đang trống</h2>
            <p className="empty-description">
              Có vẻ như bạn chưa chọn được sản phẩm ưng ý. <br />
              Hãy khám phá hàng ngàn sản phẩm làm đẹp hấp dẫn tại cửa hàng nhé!
            </p>
            <button className="back-to-shop-btn" onClick={() => navigate('/')}>
              Khám phá ngay
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h1 className="cart-title">Giỏ hàng của bạn</h1>

      <div className="cart-content">
        <div className="cart-main-section">
          <div className="cart-header-labels cart-grid-layout">
            <span className="label-product">Sản phẩm</span>
            <span className="label-quantity">Số lượng</span>
            <span className="label-total">Thành tiền</span>
            <span></span>
          </div>

          <div className="cart-items">
            {cartItems.map((item) => {
              const price = parsePrice(item.currentPrice);
              const itemTotal = price * item.quantity;

              return (
                <div key={item.id} className="cart-item cart-grid-layout">
                  <div className="product-info-col">
                    <div className="cart-item-image">
                      <img 
                        src={item.image || imageMap[item.imageKey] || 'https://via.placeholder.com/150'} 
                        alt={item.name} 
                      />
                    </div>
                    <div className="cart-item-info">
                      <h3 className="cart-item-name">{item.name}</h3>
                      <p className="cart-item-price">
                        {item.currentPrice} 
                        {item.originalPrice && (
                          <span className="original-price-tag">{item.originalPrice}</span>
                        )}
                      </p>
                    </div>
                  </div>

                  <div className="cart-item-quantity">
                     <button className="quantity-btn minus" onClick={() => decreaseQuantity(item.id)}>−</button>
                     <span className="quantity-value">{item.quantity}</span>
                     <button className="quantity-btn plus" onClick={() => increaseQuantity(item.id)}>+</button>
                  </div>

                  <div className="cart-item-total">
                    <p className="item-total-price">{formatPrice(itemTotal)}</p>
                  </div>

                  <button className="remove-item-btn" onClick={() => removeItem(item.id)}>✕</button>
                </div>
              );
            })}
          </div>
        </div>

        <div className="cart-summary">
          <h2 className="summary-title">Tổng kết đơn hàng</h2>
          
          <div className="summary-details">
            <div className="summary-row">
              <span>Tạm tính:</span>
              <span>{formatPrice(calculateSubtotal() + calculateTotalDiscount())}</span>
            </div>
            
            {calculateTotalDiscount() > 0 && (
              <div className="summary-row dis ">
                <span>Giảm giá sản phẩm:</span>
                <span>-{formatPrice(calculateTotalDiscount())}</span>
              </div>
            )}

            <div className="summary-row">
              <span>Phí vận chuyển:</span>
              <span>Miễn phí</span>
            </div>

            <div className="coupon-section">
              <input 
                type="text" 
                placeholder="Nhập mã giảm giá..." 
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                className="coupon-input"
              />
              <button className="coupon-apply-btn">Áp dụng</button>
            </div>

            <div className="summary-divider"></div>
            <div className="summary-row total">
              <span>Tổng cộng:</span>
              <span className="total-price">{formatPrice(calculateSubtotal())}</span>
            </div>
          </div>
          
          <button className="checkout-btn">Thanh toán ngay</button>
          <button className="continue-shopping-btn outline" onClick={() => navigate('/')}>
            Tiếp tục mua sắm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;