import React from 'react'
import "./Footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faTwitter,
    faLinkedinIn,
    faInstagram,
    faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";


function componentName() {
    return (

        <div>
            <footer>
                <section
                    class="footer-widget-area footer-widget-area-bg section-custom-bg"
                    className="footer-bg"
                >
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="about-footer">
                                    <div class="row">
                                        <div class="col-md-12 mt-5">
                                            <figure>
                                                <img
                                                    class="center mt-4"
                                                    src="https://ld-prestashop.template-help.com/prestashop_eze_256/img/remodia-logo-1596624527.jpg"
                                                    alt=""
                                                />
                                            </figure>
                                            <p class="margin-top-24">
                                                Remodia is Trust the appliance
                                                repairexperts.We sell not only top quality
                                                products, but give our customers a positive online shopping experience.
                                                Our arranties are superior than the
                                                manufacturers warranties, and
                                                our pricing is the absolute
                                                best.Purchase the goods you need every day or just like in a few clicks or taps, depending on the device you use
                                                to access the Internet. We work to make your life more enjoyable.
                                            </p>
                                            <div class="footer-social-icons mt-5">
                                                <p>
                                                    <FontAwesomeIcon
                                                        icon={faFacebookF}
                                                    />
                                                </p>

                                                <p>
                                                    <FontAwesomeIcon
                                                        icon={faTwitter}
                                                    />
                                                </p>

                                                <p>
                                                    <FontAwesomeIcon
                                                        icon={faInstagram}
                                                    />
                                                </p>

                                                <p>
                                                    <FontAwesomeIcon
                                                        icon={faLinkedinIn}
                                                    />
                                                </p>

                                                <p>
                                                    <FontAwesomeIcon
                                                        icon={faPinterest}
                                                    />
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row mt-5">
                            <div class="col-md-4 col-sm-6 col-xs-12 mt-5">
                                <div class="footer-widget">
                                    <div class="sidebar-widget-wrapper">
                                        <div class="footer-widget-header clearfix">
                                            <h3>OFFICE ADDRESS</h3>
                                        </div>

                                        <div class="textwidget">
                                            <p >
                                                <a href="f" class="text-reset">
                                                    support-us@remodia.com
                                                </a>
                                                <br />
                                                <a href="f" class="text-reset">
                                                    helpmenow@remodia.com
                                                </a>
                                            </p>
                                            <i class="fa fa-location-arrow fa-contact"></i>{" "}
                                            <p>
                                                Road-2,3/A East Andaorkillha
                                                <br />
                                                 Chittagong-3100, Bangladesh
                                            </p>
                                            <i class="fa fa-phone fa-contact"></i>{" "}
                                            <p>
                                                Office:&nbsp; (+880) 0823 560
                                                433
                                                <br />
                                                Cell:&nbsp; (+880) 0723 161 343
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4 col-sm-6 col-xs-12 mt-5">
                                <div class="footer-widget">
                                    <div class="sidebar-widget-wrapper">
                                        <div class="footer-widget-header clearfix">
                                            <h3>QUALITY SERVICES</h3>
                                        </div>

                                        <div class="textwidget">
                                            <ul class="footer-useful-links clearfix">
                                                <li>
                                                    <p>
                                                        <FontAwesomeIcon
                                                            class="service-icon"
                                                            icon={faCaretRight}
                                                        />
                                                         Home Renovation
                                                    </p>
                                                </li>

                                                <li>
                                                    <p>
                                                        <FontAwesomeIcon
                                                            class="service-icon"
                                                            icon={faCaretRight}
                                                        />
                                                         Laying Linoleum
                                                    </p>
                                                </li>

                                                <li>
                                                    <p>
                                                        <FontAwesomeIcon
                                                            class="service-icon"
                                                            icon={faCaretRight}
                                                        />
                                                         Door Installation
                                                    </p>
                                                </li>

                                                <li>
                                                    <p>
                                                        <FontAwesomeIcon
                                                            class="service-icon"
                                                            icon={faCaretRight}
                                                        />
                                                        Floor Carpeting
                                                    </p>
                                                </li>

                                                <li>
                                                    <p>
                                                        <FontAwesomeIcon
                                                            class="service-icon"
                                                            icon={faCaretRight}
                                                        />
                                                         House Cleaning
                                                    </p>
                                                </li>

                                                <li>
                                                    <p>
                                                        <FontAwesomeIcon
                                                            class="service-icon"
                                                            icon={faCaretRight}
                                                        />
                                                        Plumbing fixing
                                                    </p>
                                                </li>

                                                <li>
                                                    <p>
                                                        <FontAwesomeIcon
                                                            class="service-icon"
                                                            icon={faCaretRight}
                                                        />
                                                         Tap replacement
                                                    </p>
                                                </li>
                                                <li>
                                                    <p>
                                                        <FontAwesomeIcon
                                                            class="service-icon"
                                                            icon={faCaretRight}
                                                        />
                                                         Filter Replacement
                                                    </p>
                                                </li>

                                                <li>
                                                    <p>
                                                        <FontAwesomeIcon
                                                            class="service-icon"
                                                            icon={faCaretRight}
                                                        />
                                                         Sewer Cleaning
                                                    </p>
                                                </li>
                                                <li>
                                                    <p>
                                                        <FontAwesomeIcon
                                                            class="service-icon"
                                                            icon={faCaretRight}
                                                        />
                                                         Electrical Services
                                                    </p>
                                                </li>

                                                <li>
                                                    <p>
                                                        <FontAwesomeIcon
                                                            class="service-icon"
                                                            icon={faCaretRight}
                                                        />
                                                        AC Serviceing
                                                    </p>
                                                </li>

                                                <li>
                                                    <p>
                                                        {/* <i class="fa fa-caret-right fa-footer"></i> */}
                                                        <FontAwesomeIcon
                                                            class="service-icon"
                                                            icon={faCaretRight}
                                                        />
                                                         Oven Connection
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4 col-sm-6 col-xs-12 mt-5">
                                <div class="footer-widget">
                                    <div class="sidebar-widget-wrapper">
                                        <div class="footer-widget-header clearfix">
                                            <h3>BUSINESS HOURS</h3>
                                        </div>

                                        <div class="textwidget">
                                            <ul class="opening-shedule">
                                                <li class="clearfix">
                                                    <span> Sat - Tues : </span>
                                                    <div class="pull-right">
                                                        {" "}
                                                        6.00 AM - 10.00 PM
                                                    </div>
                                                </li>
                                                <li>
                                                    <span> Wed - Thurs : </span>
                                                    <div class="pull-right">
                                                        {" "}
                                                        8.00 AM - 6.00 PM
                                                    </div>
                                                </li>
                                                <li>
                                                    <span> Friday :</span>
                                                    <div class="pull-right">
                                                        {" "}
                                                        6.00 AM - 10.00 PM
                                                    </div>
                                                </li>
                                                <li>
                                                    <span> Sunday :</span>
                                                    <div class="pull-right">
                                                        {" "}
                                                        Closed
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12 col-sm-12 text-center clearfix">
                                <p class="copyright-text">
                                    Copyright {new Date().getFullYear()} -
                                     Remodia by Amina Anika.All Rights
                                    Reserved.{" "}
                                </p>
                            </div>
                </section>

            </footer>
        </div>
    )
}

export default componentName
