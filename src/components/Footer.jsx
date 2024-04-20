import React from "react";

const Footer = () => {
  return (
    <div className="max-w-6xl me-auto ms-auto py-5 mt-10 shadow-lg ">
      <div className="md:flex hidden  items-center justify-between">
        <div>
          <h3>© 2024 Nexus. All Rights Reserved.</h3>
        </div>
        <div className="flex items-center justify-center gap-5">
          <a href="#">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
          <a href="#">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
          <a href="#">
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
          <a href="#">
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
        </div>
      </div>
      <div className="md:hidden items-center justify-center flex flex-col gap-5">
        <div>
          <h3>© 2024 Nexus. All Rights Reserved.</h3>
        </div>
        <div className="flex items-center justify-center gap-5">
          <a href="#">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
          <a href="#">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
          <a href="#">
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
          <a href="#">
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
