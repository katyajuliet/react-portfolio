import React from "react";

const Footer = () => {
    const year = new Date().getFullYear();
    return<footer id="contact" className="footer">
     <p>
              <a
                href="mailto:katyajuliet22@gmail.com"
                rel="no opener"
              >
              Email Me |
              </a>
              <a
                href="tel:8313456786"
                rel="no opener"
              >
             Call Me |
              </a>
              <a
                href="https://drive.google.com/file/d/1Bg1GZIOMjVBORq5l4g7YHkLBtMp6Hfkb/view?usp=sharing"
                rel="no opener"
              >
              Additional Design & Dev Samples
              </a>
            </p>
            {`Copyright © Katya J. Lerner ${year}. All Rights Reserved.`}
    </footer>;
 
};

export default Footer;