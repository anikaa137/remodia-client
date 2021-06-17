import React, { useEffect, useState,  } from 'react'
import { useParams } from 'react-router';
import "./ViewSErvice.css"
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
// import { useContext } from 'react';
// import { ProductContext } from '../../../App';


function ViewService() {
    const { id } = useParams()
    // console.log(id)
    // const [viewdata, setViewdata] = useContext( ProductContext)
    // console.log(viewdata);
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
        const eventData = {
            Duration: data.Duration,
            Woekers: data.Woekers,
            Area: data.Area,
            name: name,
            price: price,
            imageURL: imageURL
        };
        console.log("eventdata", eventData)
        // setViewdata(eventData)
        fetch("http://localhost:5000/addConfirmOrder", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(eventData),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            });
    };



    const [viewService, setViewService] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/ViewService/${id}`)
            .then(res => res.json())
            .then(data => setViewService(data))
    }, [id])

    const { name, price, imageURL, detailes } = viewService;
    return (
        <div class="viewService p-5">
            <div class="container">
                <div class="row g-0">
                    <div class="col-md-5">
                        <img src={imageURL} alt="" style={{ width: "70%", borderRadius: "10%" }} />
                    </div>
                    <div class="col-md-7">
                        <h1 class="fw-light mb-5 text-start" >{name}</h1>
                        <p class="text-sm-start fst-italic text-muted">{detailes}</p>
                        <h1 class="text-start fw-bolder price">${price} <span class=" text-muted tax">Tax excluded</span></h1>


                        <form onSubmit={handleSubmit(onSubmit)} class="mt-5 text-start row g-2 ">
                            <label for="inputname" class="form-label">
                                Duration
                            </label>
                            <br />
                            <select {...register("Duration")} class="col-md-4">
                                <option value="2 Hours">2 Hours</option>
                                <option value="3 Hours">3 Hours</option>

                            </select>
                            <br /><br />
                            <label for="inputname" class="form-label">
                                Amount of Woekers
                            </label>
                            <br />
                            <select {...register("Woekers")} class="col-md-4">
                                <option value="2 Woekers">2 Woekers</option>
                                <option value="3 Woekers">3 Woekers</option>
                                <option value="4 Woekers">4 Woekers</option>

                            </select>
                            <br /><br />
                            <label for="inputname" class="form-label">
                                Area
                            </label>
                            <br />
                            <select {...register("Area")} class="col-md-4">
                                <option value="130-180 m2">130-180 m2</option>
                                <option value="180-220 m2">180-220 m2</option>

                            </select>
                            <br /><br />
                            <div class="pt-5">
                                {/* <CheckOut ></CheckOut> */}
                                <Link to="/"><button type="button" class="btn-brand rounded-pill checkOut-btn ">Go To Home</button></Link>

                                <Link to="/checkout"><button type="submit" class="btn-brand rounded-pill checkOut-btn ">Proceed To checkout </button></Link>

                            </div>

                        </form>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewService;
