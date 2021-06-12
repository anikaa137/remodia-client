import { Button } from "react-bootstrap";
import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "./Carousels.css";

const Carousels = () => {
  const content = [
    {
      image:
        "https://ld-prestashop.template-help.com/prestashop_eze_256/modules/jxmegalayout/extracontent/xhDJFGQ0922nesyK.jpg",
      title: " All types of major and  ",
      title: "small appliance repairs",
      description:
        "Our repair services include riding lawn mowers, exercise equipment and more. We are the",
      description:
        "household appliance repair provider you can trust for any problem.",
      button: "Shope",
    },
    {
      image:
        "https://ld-prestashop.template-help.com/prestashop_eze_256/modules/jxmegalayout/extracontent/YTZ5SImNTJEOSZxg.jpg",
      title: "Trust the appliance"  ,
      title: "repairexperts",

      description:
        "We stand behind our work and the parts we use. Count on us for fast, reliable",
      description: "service and satisfaction guaranteed!",

      button: "Shope",
    },
    {
      image:
        "https://ld-prestashop.template-help.com/prestashop_eze_256/modules/jxmegalayout/extracontent/3XDPXuAGIdE8Y2uH.jpg",
      title: "Appliance service guarantee",
      description:
        "We stand behind our work and the parts we use. Count on us for fast, reliable",
      description: "service and satisfaction guaranteed!",

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
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <Button>{item.button}</Button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Carousels;