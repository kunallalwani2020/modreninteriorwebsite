import React, { useState } from "react";
import Header from "../Header";
import cross from "../../assets/images/cross.svg"; // Ensure this image path is correct
import Footer from "../Footer";
import Data from "../product_data.json"; // Ensure this JSON is properly formatted and accessible
import { useDispatch } from "react-redux";
import { add } from "../Services/CartSlice";

function Shop() {
  const [products] = useState(Data.Product);
  console.log(products); // Since you're not updating products, you can avoid using setProduct
  const dispatch = useDispatch();
  const addtoCart = (e) => {
    dispatch(add(e));
    console.log(e);
  };
  return (
    <>
      <Header />
      <div className="untree_co-section product-section before-footer-section">
        <div className="container">
          <div className="row">
            {products && products.length > 0 ? (
              products.map((product) => (
                <div key={product.id} className="col-12 col-md-4 col-lg-3 mb-5">
                  <a className="product-item" href="#">
                    <img
                      src={product.image}
                      className="img-fluid product-thumbnail"
                      alt={product.title} // Changed from product.name to product.title
                    />
                    <h3 className="product-title">{product.title}</h3>{" "}
                    {/* Changed from product.name to product.title */}
                    <strong className="product-price">${product.price}</strong>
                    <span className="icon-cross">
                      <img
                        src={cross}
                        className="img-fluid"
                        alt="Remove"
                        onClick={() => addtoCart(product)}
                      />
                    </span>
                  </a>
                </div>
              ))
            ) : (
              <p>No products available</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Shop;
