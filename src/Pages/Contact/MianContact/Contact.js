import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import ContactAddress from "../ContactAddress/ContactAddress";
import ContactArea from "../ContactArea/ContactArea";
import ContactBanner from "../ContactBanner/ContactBanner";

const Contact = () => {
  return (
    <div>
      <Header />
      <ContactBanner />
      <ContactAddress />
      <ContactArea />
      <Footer />
    </div>
  );
};

export default Contact;
