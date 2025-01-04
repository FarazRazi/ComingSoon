import React, { ReactNode } from "react";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Syncho" }: Props) => (
  <div className="relative min-h-screen flex flex-col justify-center items-center bg-hero bg-cover">
    <Head>
      <title>{title} | Syncho</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="description"
        content="Sycnho - Transforming Local Industries with Smart Solutions"
      />
      <meta property="og:title" content={`${title} | Syncho`} />
      <meta
        property="og:description"
        content="Sycnho - Transforming Local Industries with Smart Solutions"
      />
      <meta property="og:url" content="https://sync-ho.com/" />
      <meta property="og:type" content="website" />
    </Head>
    {children}
  </div>
);

export default Layout;
