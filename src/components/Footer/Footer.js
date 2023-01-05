import React from "react";
import "./footer.css";
import SectionWrapper from "../Container/SectionWrapper";

const Footer = () => {
  return (
    <div className="page-content">
      <SectionWrapper>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <p>
                  Copyright © 2036 <a href="/#">Cyborg Gaming</a> Company. All
                  rights reserved.
                  <br />
                  Design:{" "}
                  <a href="/#" title="free CSS templates">
                    TemplateMo
                  </a>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </SectionWrapper>
    </div>
  );
};

export default Footer;
