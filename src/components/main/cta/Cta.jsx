import "./Cta.css";
import instagram from "../../../assets/instagram.svg";
import twitter from "../../../assets/twitter.svg";
import pinterest from "../../../assets/pinterest.svg";
import facebook from "../../../assets/facebook.svg";
import brand1 from "../../../assets/brand1.svg";
import brand2 from "../../../assets/brand2.svg";
import brand3 from "../../../assets/brand3.svg";
import brand4 from "../../../assets/brand4.svg";
import brand5 from "../../../assets/brand5.svg";
import brand6 from "../../../assets/brand6.svg";
import igpost1 from "../../../assets/igpost1.svg";
import igpost2 from "../../../assets/igpost2.svg";
import igpost3 from "../../../assets/igpost3.svg";
import igpost4 from "../../../assets/igpost4.svg";
import igpost5 from "../../../assets/igpost5.svg";
import igpost6 from "../../../assets/igpost6.svg";



import React from 'react'

function Cta() {
  return (<div className="ctaPlusSocial">
    <div className="social">
        <div className="brandLogos">
            <img src={brand1} alt="brand1" />
            <img src={brand2} alt="brand2" />
            <img src={brand3} alt="brand3" />
            <img src={brand4} alt="brand4" />
            <img src={brand5} alt="brand5" />
            <img src={brand6} alt="brand6" />
        </div>
        <h3>Follow us on Instagram</h3>
        <div className="socialCards">
            <div className="card">
                <img src={igpost1} alt="igpost1" />
            </div>
            <div className="card">
                <img src={igpost2} alt="igpost2" />
            </div>
            <div className="card">
                <img src={igpost3} alt="igpost3" />
            </div>
            <div className="card">
                <img src={igpost4} alt="igpost4" />
            </div>
            <div className="card">
                <img src={igpost5} alt="igpost5" />
            </div>
            <div className="card">
                <img src={igpost6} alt="igpost6" />
            </div>
        </div>
    </div>

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
    </div>
  )
}

export default Cta;