import React from 'react'
import { useHistory } from "react-router";
import "./ServiceDetailes.css"

function ServiceDetailes({ service }) {

    let history = useHistory();

    const serviceHandler = (id) => {
        history.push(`/view_service/${id}`);
        console.log("click");
    };
    return (
        <div>
        <div class="col" >
            <div class="card h-100 serviceDetailesCard p-3" onClick={() => serviceHandler(service._id)}>
                <img
                    src={service.imageURL}
                    class="card-img-top serviceDetailesImg"
                    alt="..."
                />
                <div class="card-body text-center">
                    <h5 class="card-title" style={{backgroundSize:"cover"}}>{service.name}</h5>
                    <h5 class="card-text">
                         Price: ${service.price}
                    </h5>
                    </div>
                    {/* <button
                        class="serviceDetailes-btn btn-brand rounded-pill mx-auto mb-5"style={{cursor:"pointer"}}
                        onClick={() => serviceHandler(service._id)}
                    >
                        View Service
                </button> */}
                </div>

        </div>
    </div>
    )
}

export default ServiceDetailes;
