import React, { useContext } from "react";
import styles from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";
const HeaderCartButton = (props) => {
  const cartctx = useContext(CartContext);
  const numberOfCartItems = cartctx.items.reduce((acc, curr) => {
    return acc + curr.amount;
  }, 0);
  return (
    <button className={styles.button} onClick={props.onClick}>
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={styles.icon}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
