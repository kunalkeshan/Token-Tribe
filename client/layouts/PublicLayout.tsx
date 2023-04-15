import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import React from "react";
import Headroom from "react-headroom";

const PublicLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Headroom>
        <Navbar />
      </Headroom>
      <main className="">{children}</main>
      <Footer />
    </>
  );
};

export default PublicLayout;
