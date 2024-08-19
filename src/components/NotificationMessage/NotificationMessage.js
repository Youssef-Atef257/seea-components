import React from 'react';
import styles from './NotificationMessage.module.css';

const NotificationMessage = () => {
  return (
    <div className={styles['page-wrapper']}>
      <div className={styles['notification-container']}>
        <span className={styles['close-btn']}>x</span>
        <p className={styles['notification-message']}>
          Product successfully added to the cart
        </p>
        <div className={styles['button-group']}>
          <button className={styles['btn-continue']}>Continue Shopping</button>
          <button className={styles['btn-checkout']}>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default NotificationMessage;
