import React from "react";
import { Header, Footer, MetaTags } from "components";
import "./container.style.css";

export default function Container({
  children,
  title,
  description,
  image,
  url,
}) {
  return (
    <>
      <MetaTags
        title={title}
        description={description}
        image={image}
        url={url}
      />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
