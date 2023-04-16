import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";

import "../styles/global.css";
import Layout from "@/components/layout";

const queryClient = new QueryClient();
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </Layout>
  );
}
