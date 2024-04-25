import React from "react";
import Partner1 from "../../assets/Talenvo.png";
import Partner4 from "../../assets/codenest.png";
import Partner2 from "../../assets/switchCon 1.png";
import Partner3 from "../../assets/trace.png";
import Partner5 from "../../assets/x.png";

const PartnerLogo = () => {
  return (
    <div>
      <div className="ms-auto me-auto max-w-6xl md:flex hidden my-14 items-center justify-between ">
        <div>
          <img width={"200px"} src={Partner1} alt="Talenvo Logo" />
        </div>
        <div>
          <img width={"200px"} src={Partner2} alt="SwitchCon Logo" />
        </div>
        <div>
          <img width={"200px"} src={Partner3} alt="Trace Logo" />
        </div>
        <div>
          <img width={"200px"} src={Partner4} alt="Codenest Logo" />
        </div>
        <div>
          <img width={"50px"} src={Partner5} alt="EL X WILL LOGO" />
        </div>
      </div>
      {/* MOBILE VIEW */}
      <div className="ms-auto flex me-auto max-w-6xl md:hidden mx-20 my-6 mt-10 items-center justify-between px-5">
        <div>
          <img className="w-3/4" src={Partner1} alt="Talenvo Logo" />
        </div>
        <div>
          <img className="w-3/4" src={Partner2} alt="SwitchCon Logo" />
        </div>
        <div>
          <img className="w-3/4" src={Partner3} alt="Trace Logo" />
        </div>
        <div>
          <img className="w-3/4" src={Partner4} alt="Codenest Logo" />
        </div>
        <div>
          <img className="w-3/4" src={Partner5} alt="EL X WILL LOGO" />
        </div>
      </div>
    </div>
  );
};

export default PartnerLogo;
