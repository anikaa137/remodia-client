import React from 'react'
import "./AddService.css"
import { useForm } from "react-hook-form";
import Sidebar from "../../ShareComponents/Sidebar/Sidebar"

function AddService() {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
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
                                // onChange={handleImageUpload}
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
