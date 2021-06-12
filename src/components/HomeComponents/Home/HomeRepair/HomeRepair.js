import React from 'react';
import "./HomeRepair.css"

const HomeRepair = () => {
    return (
        <div class="homerepair ">
            <div class="container">
                <div class="row g-0">
                    <div class=" col-sm-5 col-md-5 col-md-1">
                        <div class="homerepairCardtext">
                            <h3 class=" text-start ">The Trusted Name in Home <br /> Repair</h3>
                            <h5 class=" text-start pt-5">We provide quality repair services to help extend the life of your appliances. We offer a 90-day
                                satisfaction guarantee.</h5>
                            <p class=" text-start pt-5"> If your appliance fails due to reasons related to the original repair, <br /> we will replace any parts that</p>
                            <p class=" text-start  "> fail due to defects in materials, workmanship, and perform any <br /> additional labor free of charge.</p>
                            {/* <button class="btn-brand rounded-pill homeRepairBtn">Shope</button> */}

                        </div>
                    </div>
                    <div class="col-7 col-md-7 col-md-1">
                        <img src="https://ld-prestashop.template-help.com/prestashop_eze_256/modules/jxmegalayout/extracontent/YxiXDoQEAYsXZEsJ.png" class="img-fluid homerepairImg"airImg alt="homeRepair Img" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HomeRepair;