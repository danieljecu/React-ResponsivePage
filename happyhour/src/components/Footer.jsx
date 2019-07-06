import React from "react";
import "./Footer.css";

const Footer = props => {
  const [scrollBtn, setScrollBtn] = React.useState({ className: "btnInitial" });

  const debounce = (func, wait, immediate) => {
    let timeout;
    return function() {
      clearTimeout(timeout);
      timeout = setTimeout(func, wait);
    };
  };
  const realFunc = () => {
    window.scrollY === 0
      ? setScrollBtn({ className: "fade-out" })
      : setScrollBtn({ className: "fade-in" });
  };
  React.useEffect(() => {
    window.addEventListener("scroll", debounce(realFunc, 500));
    return () => {
      window.removeEventListener("scroll", debounce);
    };
  }, []);
  return (
    <React.Fragment>
      <img
        id="Footer-scroll"
        {...scrollBtn}
        src={"../assets/to-top.svg"}
        alt="Scroll TO Top"
        onClick={() => {
          window.scroll({ top: 0, left: 0, behavior: "smooth" });
        }}
      />

      <div id="Footer-container">
        <span className="Footer-sign">2019@NETFRONT</span>
        <span className="Footer-sign">{`POLICY  |  TERM & CONDITION  |  CONTACT`}</span>
      </div>
    </React.Fragment>
  );
};
export default React.memo(Footer);
