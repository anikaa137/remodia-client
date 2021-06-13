// import { Button } from "react-bootstrap";
import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "./Carousels.css";

const Carousels = () => {
  const content = [
    {
      image:
        "https://ld-prestashop.template-help.com/prestashop_eze_256/modules/jxmegalayout/extracontent/xhDJFGQ0922nesyK.jpg",
      title1: " All types of major and  ",
      title2: "small appliance repairs",
      description1:
        "Our repair services include riding lawn mowers, exercise equipment and more. We are the",
      description2:
        "household appliance repair provider you can trust for any problem.",
      button: "Shope",
    },
    {
      image:
        "https://ld-prestashop.template-help.com/prestashop_eze_256/modules/jxmegalayout/extracontent/YTZ5SImNTJEOSZxg.jpg",
      title1: "Trust the appliance"  ,
      title2: "repairexperts",

      description1:
        "We stand behind our work and the parts we use. Count on us for fast, reliable",
      description2: "service and satisfaction guaranteed!",

      button: "Shope",
    },
    {
      image:
        "https://ld-prestashop.template-help.com/prestashop_eze_256/modules/jxmegalayout/extracontent/3XDPXuAGIdE8Y2uH.jpg",
      title1: "Appliance service guarantee",
      description1:
        "We stand behind our work and the parts we use. Count on us for fast, reliable",
      description2: "service and satisfaction guaranteed!",

      button: "Shope",
    },
  ];
  return (
    <section>
      <Slider autoplay={1000}>
        {content.map((item, index) => (
          <div
            key={index}
            style={{
              background: `url('${item.image}')no-repeat center center`,backgroundSize: "cover",
            }}
          >
            <div className="d-flex justify-content-start p-3">
              <div className="detailsSizing">
                <h1 class="text-start">{item.title1}</h1>
                <h1 class="text-start">{item.title2}</h1>
                <p class="text-start mt-5"> {item.description1}</p>
                <p class="text-start">{item.description2}</p>
                <button className="btn-brand carousels-btn rounded-pill mt-5 " >
                                    {item.button}
                                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Carousels;