import React from 'react';
import './Carousels.css'
import Sliderr from "react-animated-slider";
// import horizontalCss from "react-animated-slider/build/horizontal.css";

import "react-animated-slider/build/horizontal.css";
const content = [
    {
        image:
            "https://ld-prestashop.template-help.com/prestashop_eze_256/modules/jxmegalayout/extracontent/xhDJFGQ0922nesyK.jpg",
        title1: " All types of major and  ",
        title2: "small appliance repairs",
        discription1:"Our repair services include riding lawn mowers, exercise equipment and more. We are the",
        discription2:"household appliance repair provider you can trust for any problem.",
        button: "Shope",
    },
    {
        image:
            "https://ld-prestashop.template-help.com/prestashop_eze_256/modules/jxmegalayout/extracontent/YTZ5SImNTJEOSZxg.jpg",
        title1: `Trust the appliance  `,
        title2: `repair experts`,

        discription1: "We stand behind our work and the parts we use. Count on us for fast, reliable",
        discription2: "service and satisfaction guaranteed!",

        button: "Shope",
    },
    {
        image:
            "https://ld-prestashop.template-help.com/prestashop_eze_256/modules/jxmegalayout/extracontent/3XDPXuAGIdE8Y2uH.jpg",
        title1: "Appliance service guarantee",
        discription1: "We stand behind our work and the parts we use. Count on us for fast, reliable",
        discription2: "service and satisfaction guaranteed!",

        button: "Shope",
    },
];
const Carousels2 = () => {
    return (
        <div>
            {/* <Sliderr classNames={horizontalCss} autoplay={1000}> */}
          <Sliderr className="slider-wrapper" autoplay={1000} style={{height:'auto',width:'100%', }}>
                {content.map((item, index) => (
                    <div
                        class="slide-bg"
                        key={index}
                        style={{
                            // height:'500px',width:'500px',
                            background: `url('${item.image}' ) no-repeat center center`,backgroundSize: "cover",

                        }}

                >
                    <div
                        className="container slider-info mt-5"
                        // style={{ textShadow: "2px 2px 4px #000000" }}
                    >
                        <div class="titles">
                            <h3
                                class="text-start"
                                style={{
                                    fontSize: "50px",
                                    fontWeight: "bold",
                                }}
                            >
                                {item.title1}
                            </h3>
                      <h3
                               class="text-start"
                                style={{
                                    fontSize: "50px",
                                    fontWeight: "bold",
                                }}
                            >
                                {item.title2}
                            </h3>
                        </div>
                        <div class="discriptaions">
                            <p class="text-sm-start">
                            {item.discription1}
                            </p>
                            <p class="text-sm-start">
                            {item.discription2}
                            </p>
                        </div>
                            <div>
                                <button className="btn-brand carousels-btn  rounded-pill" >
                                    {item.button}
                                </button>
                            </div>

                    </div>
                </div>
            ))}
            </Sliderr>
    </div>
    );
};

export default Carousels2;