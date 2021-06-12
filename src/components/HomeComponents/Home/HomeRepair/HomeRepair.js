import React from 'react';
import "./HomeRepair.css"

const HomeRepair = () => {
    return (
        <div class="homerepair ">
            <div class="container">
                <div class="row g-0">
                    <div class=" col-sm-6 col-md-8 col-md-1">
                        <div class=" homerepairCardtext">
                            <h2 class=" text-start mt-5 pt-3">The Trusted Name in Home <br /> Repair</h2>
                            <h5 class=" text-start mt-5">We provide quality repair services to help extend the life of your <br /> appliances. We offer a 90-day <br />
                                satisfaction guarantee.</h5>
                            <p class=" text-start text-muted mt-5"> If your appliance fails due to reasons related to the original repair, <br /> we will replace any parts that</p>
                            <p class=" text-start text-muted p2"> fail due to defects in materials, workmanship, and perform any <br /> additional labor free of charge.</p>
                            {/* <button class="btn-brand rounded-pill homeRepairBtn">Shope</button> */}

                        </div>
                    </div>
                    <div class="col-6 col-md-4  col-md-1 homerepairImg">
                        <img src="https://ld-prestashop.template-help.com/prestashop_eze_256/modules/jxmegalayout/extracontent/YxiXDoQEAYsXZEsJ.png" class="img-fluid" alt="homeRepair Img" />
                    </div>
                </div>

            </div>
        </div>

    );
};

export default HomeRepair;