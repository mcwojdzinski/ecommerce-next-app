import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import "../styles/global.css";
import Layout from "@/components/layout";
import { DefaultSeo } from "next-seo";
import nextSeoConfig from "../../next-seo.config";

const queryClient = new QueryClient();
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <DefaultSeo {...nextSeoConfig} />
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </Layout>
  );
}
