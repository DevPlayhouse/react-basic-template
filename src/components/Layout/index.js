import React from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MetaTags from "@/components/MetaTags";

import style from "./layout.module.css";

export default function Layout({ children, title, description, image, url }) {
  return (
    <>
      <MetaTags
        title={title}
        description={description}
        image={image}
        url={url}
      />
      <Header />
      <main className={style.main}>{children}</main>
      <Footer />
    </>
  );
}
