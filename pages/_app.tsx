import type {AppProps} from "next/app";
import {Session} from "next-auth";
import {SessionProvider} from "next-auth/react";
import "../styles/globals.css";

const MyApp = ({
  Component,
  pageProps,
}: AppProps<{
  session: Session;
}>) => {
  return (
    <SessionProvider session={pageProps.session}>
      <div className="app">
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
};

export default MyApp;
