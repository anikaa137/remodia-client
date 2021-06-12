import React from "react";
import { render } from "react-dom";
// import Header from "./header";
import Slider from "react-animated-slider";
 import "react-animated-slider/build/horizontal.css";
//  import "normalize.css/normalize.css";
// import "./slider-animations.css";

const content = [
  {
    title: "Vulputate Mollis Ultricies Fermentum Parturient",
    description:
      "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
    button: "Read More",
    image: "https://ld-prestashop.template-help.com/prestashop_eze_256/modules/jxmegalayout/extracontent/xhDJFGQ0922nesyK.jpg",
    // user: "Luan Gjokaj",
    // userProfile: "https://i.imgur.com/JSW6mEk.png"
  },
  {
    title: "Tortor Dapibus Commodo Aenean Quam",
    description:
      "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.",
    button: "Discover",
    image: "https://ld-prestashop.template-help.com/prestashop_eze_256/modules/jxmegalayout/extracontent/YTZ5SImNTJEOSZxg.jpg",
    // user: "Erich Behrens",
    // userProfile: "https://i.imgur.com/0Clfnu7.png"
  },
  {
    title: "Phasellus volutpat metus",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
    button: "Buy now",
    image: "https://ld-prestashop.template-help.com/prestashop_eze_256/modules/jxmegalayout/extracontent/3XDPXuAGIdE8Y2uH.jpg",
    // user: "Bruno Vizovskyy",
    // userProfile: "https://i.imgur.com/4KeKvtH.png"
  },

];
const Carousels = () => {
    return (
        <div>
 <Slider className="slider-wrapper" autoplay={1000}>
      {content.map((item, index) => (
        <div
          key={index}
          className="slider-content"
          style={{ background: `url('${item.image}') no-repeat center center`,backgroundSize:"cover",height:'auto',width:'100%' }}
        >
          <div className="inner">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <button>{item.button}</button>
          </div>
        </div>
      ))}
    </Slider>
        </div>
    );
};

export default Carousels;