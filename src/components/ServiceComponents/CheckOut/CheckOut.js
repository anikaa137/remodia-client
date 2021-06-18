import React, { useContext } from 'react';
import "./CheckOut.css"
import { ProductContext } from '../../../App';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruck, faUserShield, faExchangeAlt} from '@fortawesome/free-solid-svg-icons'


const CheckOut = () => {

  const [viewdata, setViewdata] = useContext(ProductContext)
  console.log(viewdata)
  const { imageURL, Area, Duration, Woekers, name, price,detailes,_id } = viewdata;

  return (
    <div class="container mt-5  ">
      {/* <h2 class="text-center">Checkout</h2> */}
      <div class="card mb-3 mx-auto" style={{ maxWidth: "840px" }}>
        <div class="row g-4">
          <div class="col-md-4">
            <img src={imageURL} alt="..." style={{ width: "100%", height: "100%" }} />
          </div>
          <div class="col-md-8">
            <div class="card-body text-start">
              <h3 class="card-title text-start">{name}</h3>
              <div class="row g-4">
                <div class="col-md-8">
                  <h6 class="card-text mt-4 text-start">QUANTITY: 1</h6>
                  <p class="card-text mt-4 text-start">Duration: <span class="font-color fw-bolder"> {Duration} </span></p>
                  <p class="card-text text-start ">Workers: <span class="font-color fw-bolder"> {Woekers} </span> </p>
                  <p class="card-text  text-start">Area: <span class="font-color fw-bolder"> {Area} </span> </p>
                </div>
                <div class="col-md-3">
                  <h5 class="card-text mt-5 quantity">${price} </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div class="d-flex justify-content-evenly">
        <h6>1 ITEM: <span class="font-color">${price}</span> </h6>
        <h6>SHIPPING <span class="font-color">FREE</span></h6>
        <h3>TOTAL (TAX EXCL.) <span class="font-color">${price}</span></h3>
      </div>
      <div class="mx-auto mt-5 d-flex justify-content-evenly">
      {/* <Link to="/view_service/:id"><button class="btn-brand rounded-pill checkOut-btn">Back</button></Link> */}
      <Link to="/shipment"><button class="btn-brand rounded-pill checkOut-btn ">Go to shipment</button></Link>
      </div>
    <div className="service-policy mt-5 pt-5 ">
                      <p class="text-start"><FontAwesomeIcon icon={faUserShield} /> <span class="ms-2">Security policy (edit with Customer reassurance module)</span></p>
                      <p class="text-start"><FontAwesomeIcon icon={faTruck} /> <span class="ms-2"> Delivery policy (edit with Customer reassurance module)</span></p>
                      <p class="text-start"><FontAwesomeIcon icon={faExchangeAlt} /> <span class="ms-2"> Return policy (edit with Customer reassurance module)</span></p>
                    </div>

    </div>

  );
};

export default CheckOut;