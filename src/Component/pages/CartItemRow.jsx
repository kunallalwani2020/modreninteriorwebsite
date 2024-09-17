// src/components/CartItemRow.js
import React from "react";
import { useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../Services/CartSlice";

const CartItemRow = ({ product }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromCart(product.id));
  };

  return (
    <tr key={product.id}>
      <td className="product-thumbnail">
        <img src={product.image} alt="Product" className="img-fluid" />
      </td>
      <td className="product-name">
        <h2 className="h5 text-black">{product.title}</h2>
      </td>
      <td>{`$${(parseFloat(product.price) || 0).toFixed(2)}`}</td>
      <td>
        <div
          className="input-group mb-3 d-flex align-items-center quantity-container"
          style={{ maxWidth: 120 }}
        >
          <div className="input-group-prepend">
            <button
              className="btn btn-outline-black decrease"
              type="button"
              onClick={() => dispatch(decrementQuantity(product.id))}
            >
              −
            </button>
          </div>
          <input
            type="text"
            className="form-control text-center quantity-amount"
            value={product.quantity}
            readOnly
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-black increase"
              type="button"
              onClick={() => dispatch(incrementQuantity(product.id))}
            >
              +
            </button>
          </div>
        </div>
      </td>
      <td>{`$${(product.quantity * (parseFloat(product.price) || 0)).toFixed(
        2
      )}`}</td>
      <td>
        <button className="btn btn-black btn-sm" onClick={handleRemove}>
          X
        </button>
      </td>
    </tr>
  );
};

export default CartItemRow;
