import React, { useState } from 'react'
import "./AddService.css"
import { useForm } from "react-hook-form";
import Sidebar from "../../ShareComponents/Sidebar/Sidebar"
import axios from 'axios';

function AddService() {
    const { register, handleSubmit } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = (data, e) => {
        console.log(data);
        const eventDta = {
            name: data.name,
            price: data.price,
            detailes: data.detailes,
            imageURL: imageURL,
        };
        // console.log(eventDta)
        const url = `http://localhost:5000/addService`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(eventDta),
        }).then((res) => res.json())
            .then((res) => {
                if (res) {
                    alert('Service added succefully')
                    e.target.reset()
            }
        })
    };

    const handleImageUpload = (event) => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set("key", "d371491237d968517d992b8f6982be6a");
        imageData.append("image", event.target.files[0]);

        axios
            .post("https://api.imgbb.com/1/upload", imageData)
            .then(function (response) {
                console.log(response);
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    return (
        <div className="add-service-area">
            <div className="row m-0">
                <div className="col-md-3 p-0 m-0">
                    <Sidebar />
                </div>
                <div className="col-md-9">
                    <form onSubmit={handleSubmit(onSubmit)} className="row g-2 mt-5 p-5">
                        <div class="col-6">
                            <label for="inputname" class="form-label">
                                Service Name
                            </label>
                            <input
                                defaultValue="Service Name"
                                {...register("name")}
                                type="text"
                                class="form-control"
                                id="name"
                            />
                        </div>
                        <div class="col-6">
                            <label for="inputWight" class="form-label">
                                Price
                            </label>
                            <input
                                {...register("price")}
                                type="number"
                                class="form-control"
                                id="entireRoom"
                            />
                        </div>
                        <div class="col-6">
                            <label for="inputPhoto" class="form-label">
                                Add Photo
                            </label>
                            <input
                                type="file"
                                class="form-control"
                                onChange={handleImageUpload}
                                id="Photo"
                            />
                        </div>
                        <div class="col-6">
                            <label for="inputWight" class="form-label">
                                Service Detailes
                            </label>
                            <textarea

                                {...register("detailes")}
                                type="text"
                                class="form-control"
                                id="smallArea"
                            />
                        </div>

                        <input type="submit" class="col-2" />

                    </form>


                </div>
            </div>
        </div>
    )
}

export default AddService;
