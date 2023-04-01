import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";

import "../styles/global.css";
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    !router.asPath.endsWith("/") ? router.push(router.asPath + "/") : null;
  });

  return (
    <>
      <p className="text-3xl font-bold"> Hej</p>
      <Component {...pageProps} />
    </>
  );
}
