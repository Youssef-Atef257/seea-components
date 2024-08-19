import React from 'react';
import styles from './BillingAddress.module.css';

const BillingAddress = () => {
  return (
    <>
      <div className={styles['billing-address__container']}>
        <h2 className={styles['billing-address__heading']}>Billing Address</h2>
        
        <div className={styles['billing-address__radios']}>
          <div>
            <input type="radio" id="sameAddress" name="billingAddress" />
            <label htmlFor="sameAddress">Use same address as Shipping Address</label>
          </div>
          <div>
            <input type="radio" id="differentAddress" name="billingAddress" />
            <label htmlFor="differentAddress">Enter different Billing Address</label>
          </div>
        </div>

        <form className={styles['billing-address__form']}>
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
            <div className={styles['form__input-group']}>
              <label>Company</label>
              <input type="text" placeholder="Company" />
            </div>
            <div className={styles['form__input-group']}>
              <label>Phone Number*</label>
              <input type="text" placeholder="Phone Number" />
            </div>
          </div>

          <div className={styles['form__row']}>
            <div className={styles['form__input-group']}>
              <label>Address 1*</label>
              <input type="text" className={styles['form__input--full-width']} placeholder="Address 1" />
            </div>
          </div>

          <div className={styles['form__row']}>
            <div className={styles['form__input-group']}>
              <label>Address 2</label>
              <input type="text" className={styles['form__input--full-width']} placeholder="Address 2" />
            </div>
          </div>

          <div className={styles['form__row']}>
            <div className={`${styles['form__input-group']} ${styles['form__input--double']}`}>
              <label>City*</label>
              <input type="text" placeholder="City" />
            </div>
            <div className={styles['form__input-group']}>
              <label>State*</label>
              <input type="text" placeholder="State" />
            </div>
            <div className={styles['form__input-group']}>
              <label>Zipcode*</label>
              <input type="text" placeholder="Zipcode" />
            </div>
          </div>

          <div className={styles['form__row']}>
            <div className={styles['form__input-group']}>
              <label>Country*</label>
              <input type="text" placeholder="Country" />
            </div>
            <div className={styles['form__input-group']}>
              <label>Email</label>
              <input type="email" placeholder="Email" />
            </div>
          </div>
        </form>
      </div>
      
      <div className={styles['billing-address__button-wrapper']}>
        <button className={styles['billing-address__button']}>Continue</button>
      </div>
    </>
  );
};

export default BillingAddress;
