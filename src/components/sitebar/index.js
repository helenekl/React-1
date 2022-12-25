import React from "react";
import styles from "./index.module.css";
import facebook from "./imgs/facebook.svg";
import instagram from "./imgs/instagram.svg";
import twitter from "./imgs/twitter.svg";
import linkedin from "./imgs/linkedin.svg";
import email from "./imgs/email.svg";


function Sitebar() {
    return(
        <div className={styles.sitebar}>
            <p className={styles.siteTittle}>Milton</p>
            <hr className={styles.line}></hr>
            <p className={styles.text}>Denali is a simple responsive 
            blog template. Easily add new posts using the Editor or change 
            layout and design using the Designer.
            </p>
            <hr className={styles.line2}></hr>

            <ul className={styles.menu}>
              <li><p className={styles.links}>Home</p></li>
              <li><p className={styles.links}>About</p></li>
              <li><p className={styles.links}>Contact</p></li>
            </ul>
            <hr className={styles.line2}></hr>

            <div className={styles.mediaIcons}>
                <div className={styles.img}><img src={facebook} /></div>
                <div className={styles.img}><img src={instagram} /></div>
                <div className={styles.img}><img src={twitter} /></div>
                <div className={styles.img}><img src={linkedin} /></div>
                <div className={styles.img}><img src={email} /></div>
            </div>

            <p className={styles.text}>Built with Webflow</p>

        </div>
    );
}

export default Sitebar;