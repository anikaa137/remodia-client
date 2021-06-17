import React, { useEffect, useState } from "react";
import ServiceDetailes from "./ServiceDetailes";

function Service() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/service")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, [services]);
    return (
        <div class="container mt-5">
            <h2 class="text-center mt-5 mb-5">Popular Products</h2>
            <div className="row row-cols-1 row-cols-md-4 g-4 ">
                {services.length > 0 &&
                    services.map((service) => (
                        <ServiceDetailes service={service}></ServiceDetailes>
                    ))}
            </div>
        </div>
    )
}

export default Service;
