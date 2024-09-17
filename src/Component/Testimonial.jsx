// CarouselComponent.js
import React from "react";
// import { Carousel } from 'mdb-react-ui-kit';
// import { Carousel } from 'bootstrap';
import { Carousel } from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css"; // Import MDB CSS if not already imported

const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item className="text-center">
        <img
          className="rounded-circle shadow-1-strong mb-4"
          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
          alt="avatar"
          style={{ width: 150 }}
        />
        <div className="row d-flex justify-content-center">
          <div className="col-lg-8">
            <h5 className="mb-3">Maria Kate</h5>
            <p>Photographer</p>
            <p className="text-muted">
              <i className="fas fa-quote-left pe-2" />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et
              deleniti nesciunt sint eligendi reprehenderit reiciendis,
              quibusdam illo, beatae quia fugit consequatur laudantium velit
              magnam error. Consectetur distinctio fugit doloremque.
            </p>
          </div>
        </div>
        <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
          <li>
            <i className="fas fa-star fa-sm" />
          </li>
          <li>
            <i className="fas fa-star fa-sm" />
          </li>
          <li>
            <i className="fas fa-star fa-sm" />
          </li>
          <li>
            <i className="fas fa-star fa-sm" />
          </li>
          <li>
            <i className="far fa-star fa-sm" />
          </li>
        </ul>
      </Carousel.Item>

      <Carousel.Item className="text-center">
        <img
          className="rounded-circle shadow-1-strong mb-4"
          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
          alt="avatar"
          style={{ width: 150 }}
        />
        <div className="row d-flex justify-content-center">
          <div className="col-lg-8">
            <h5 className="mb-3">John Doe</h5>
            <p>Web Developer</p>
            <p className="text-muted">
              <i className="fas fa-quote-left pe-2" />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et
              deleniti nesciunt sint eligendi reprehenderit reiciendis.
            </p>
          </div>
        </div>
        <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
          <li>
            <i className="fas fa-star fa-sm" />
          </li>
          <li>
            <i className="fas fa-star fa-sm" />
          </li>
          <li>
            <i className="fas fa-star fa-sm" />
          </li>
          <li>
            <i className="fas fa-star fa-sm" />
          </li>
          <li>
            <i className="far fa-star fa-sm" />
          </li>
        </ul>
      </Carousel.Item>

      <Carousel.Item className="text-center">
        <img
          className="rounded-circle shadow-1-strong mb-4"
          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
          alt="avatar"
          style={{ width: 150 }}
        />
        <div className="row d-flex justify-content-center">
          <div className="col-lg-8">
            <h5 className="mb-3">Anna Deynah</h5>
            <p>UX Designer</p>
            <p className="text-muted">
              <i className="fas fa-quote-left pe-2" />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et
              deleniti nesciunt sint eligendi reprehenderit reiciendis,
              quibusdam illo, beatae quia fugit consequatur laudantium velit
              magnam error. Consectetur distinctio fugit doloremque.
            </p>
          </div>
        </div>
        <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
          <li>
            <i className="fas fa-star fa-sm" />
          </li>
          <li>
            <i className="fas fa-star fa-sm" />
          </li>
          <li>
            <i className="fas fa-star fa-sm" />
          </li>
          <li>
            <i className="fas fa-star fa-sm" />
          </li>
          <li>
            <i className="far fa-star fa-sm" />
          </li>
        </ul>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
