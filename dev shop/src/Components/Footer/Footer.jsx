import React from "react";
import SendIcon from "@mui/icons-material/Send";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <h4>Subscribe to our emails</h4>

        {/* {I have take this input style idea from the Dean Hidri in code pen } */}
        <div className="container">
          <div className="container__item">
            <form className="form">
              <input
                type="email"
                className="form__field"
                placeholder="Your E-Mail Address"
              />
              <button
                type="button"
                className="btn btn--primary btn--inside uppercase"
              >
                <SendIcon />
              </button>
            </form>
          </div>
        </div>
        {/* {---------------------------------------------------------------------------} */}
      </div>

      <div className="bottom">
        <img className="footer-img" src="Img/payment.png" alt="" />
      </div>
      <p>© 2023, Dev Shop Powered by Stripe</p>
    </div>
  );
};

export default Footer;
