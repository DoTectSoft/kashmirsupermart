import "./Cta.css";
import instagram from "../../../assets/instagram.svg";
import twitter from "../../../assets/twitter.svg";
import pinterest from "../../../assets/pinterest.svg";
import facebook from "../../../assets/facebook.svg";

import React from 'react'

function Cta() {
  return (
    <div className="cta">
        <div className="ctaInnerDiv">
        <div className="ctaText">
            <h5>Subcribe our Newsletter</h5>
            <p>Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna.</p>
        </div>
        <div className="ctaSearchSocials">
            <div className="ctaSearch">
                <input placeholder="Your Email Address"/>
                <div>Subscribe</div>
            </div>
            <div className="ctaSocials">
                <img src={facebook}/>
                <img src={twitter}/>
                <img src={pinterest}/>
                <img src={instagram}/>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Cta;