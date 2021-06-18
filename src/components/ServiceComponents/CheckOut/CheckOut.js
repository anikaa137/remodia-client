import React, { useContext } from 'react';
import { useEffect } from 'react';
import { ProductContext } from '../../../App';
import "./CheckOut.css"

const CheckOut = () => {

  const [viewdata, setViewdata] = useContext(ProductContext)
  console.log(viewdata)

  const {imageURL,Area,Duration,Woekers,name,price} = viewdata;

  return (
        <div class="container mt-5 pt-5">
      <div class="card mb-3 mx-auto" style={{ maxWidth: "840px" }}>
  <div class="row g-4">
    <div class="col-md-4">
            <img src={imageURL} alt="..." style={{width:"100%", height:"100%"}}/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
              <h3 class="card-title">{name}</h3>
              <h6 class="card-text mt-4">QUANTITY: 1</h6>

              {/* <p class="card-text mt-4">Duration:  {Duration} <span class=" ms-4">Workers:  {Woekers}</span> <span class=" ms-4">Area:  {Area}</span></p> */}
              <p class="card-text mt-4">Duration:  {Duration} </p>
              <p class="card-text mt-2">Workers:  {Woekers} </p>
              <p class="card-text mt-2">Area:  {Area}</p>
              {/* <h5 class="card-text mt-4 quantity">${price} </h5> */}

              {/* <h2 class="card-text"><small class="text-muted">Last updated 3 mins ago</small></h2> */}


      </div>
    </div>
  </div>
</div>
</div>

    );
};

export default CheckOut;