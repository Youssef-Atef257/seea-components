import React from 'react';
import styles from './PaymentMethod.module.css';

const PaymentMethod = () => {
  return (
    <>
      <div className={styles['payment-method__container']}>
        <h2 className={styles['payment-method__heading']}>Payment Method</h2>
        
        <form className={styles['payment-method__form']}>
          <div className={styles['form__row']}>
            <div className={styles['form__input-group']}>
              <label>First Name*</label>
              <input type="text" placeholder="First Name" />
            </div>
            <div className={styles['form__input-group']}>
              <label>Last Name*</label>
              <input type="text" placeholder="Last Name" />
            </div>
          </div>
          
          <div className={styles['form__row']}>
            <div className={`${styles['form__input-group']} ${styles['form__input--card-number']}`}>
              <label>Card Number*</label>
              <input type="text" placeholder="Card Number" />
            </div>
            <div className={`${styles['form__input-group']} ${styles['form__input--security-code']}`}>
              <label>Security Code*</label>
              <input type="text" placeholder="Security Code" />
            </div>
          </div>

          <div className={styles['form__row']}>
            <div className={`${styles['form__input-group']} ${styles['form__input--expiration-date']}`}>
              <label>Expiration Date*</label>
              <input type="text" placeholder="MM/YY" />
            </div>
          </div>
        </form>
      </div>

     
      <div className={styles['payment-method__button-wrapper']}>
        <button className={styles['payment-method__button']}>Continue</button>
      </div>
    </>
  );
};

export default PaymentMethod;
