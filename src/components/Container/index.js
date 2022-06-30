import React from "react";
import { Header, Footer, MetaTags } from "components";
import style from "./container.module.css";

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
      <main className={style.main}>{children}</main>
      <Footer />
    </>
  );
}
